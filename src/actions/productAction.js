import axios from "axios"
import { url } from "../data"

export const fetchData = () => {
    return {
        type: 'FETCH_DATA'
    }
}

export const setProducts = (data) => {
    return {
        type: 'SET_PRODUCTS',
        payload: data
    }
}

export const setErrors = (data) => {
    return {
        type: 'SET_ERRORS',
        payload: data
    }
}

const setProductDetail = (data) => {
    return {
        type: 'SET_PRODUCT',
        payload: data
    }
}

export const getProducts = () => (dispatch) => {
    dispatch(fetchData());
    axios.get(`${url}/products?page=1`)
    .then((res) => {
        dispatch(setProducts(res.data.products));
    })
    .catch((err) => {
        dispatch(setErrors(err.response?.statusText || err.message));
        console.log(err.response?.statusText || err.message);
    })
}

const fetchDataDetail = () => {
    return {
        type: 'FETCH_DATA_DETAIL'
    }
}

const setErrorsDetail = (errors) => {
    return {
        type: 'SET_ERRORS_DETAIL',
        paload: errors
    }
}

export const getProductDetail = (_id) => (dispatch) => {
    dispatch(fetchDataDetail());
    axios.get(`${url}/products/${_id}`)
    .then(res => {
        dispatch(setProductDetail(res.data));
    })
    .catch((err) => {
        dispatch(setErrorsDetail(err.response.statusText));
        console.log(err);
    })
}