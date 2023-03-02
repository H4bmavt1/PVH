import axios from "axios"
import { url } from "../data"
import { closeFormProduct } from "./adminAction"

const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

const setProductList = (productList) => {
    return {
        type: 'SET_PRODUCT_LIST',
        payload: productList
    }
}

const setErrorsProductList = (productList) => {
    return {
        type: 'SET_ERRORS_PRODUCT_LIST',
        payload: productList
    }
}

export const fetchProductList = (page, manufacturer, classes, price, search, sort) => async (dispatch) => {
    dispatch(setLoading());
    let query = '';
    if(manufacturer) {
        query += `&manufacturer=${manufacturer}`;
    }
    if(classes) {
        query += `&classes=${classes}`;
    }
    if(price) {
        query += `&price=${price}`;
    }
    if(search) {
        query += `&search=${search}`;
    }
    if(sort) {
        query += `&sort=${sort}`;
    }
    try {
        const productList = await axios.get(`${url}/products?page=${page}&${query}`);
        dispatch(setProductList(productList.data));
    } catch(err) {
        dispatch(setErrorsProductList(err.response?.statusText || err.message));
        console.log(err.response?.statusText || err.message)
    }
}

export const createProduct = (data) => async (dispatch) => {
    try {
        await axios.post(`${url}/products/create`, data, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        dispatch(closeFormProduct());
        dispatch(setErrorsProductList(null));
    } catch(err) {
        dispatch(setErrorsProductList(err.response?.statusText || err.message));
        console.log(err.response?.statusText || err.message)
    }
}