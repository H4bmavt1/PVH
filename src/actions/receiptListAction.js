import axios from "axios"
import { url } from "../data"

const setLoading = () => {
    return {
        type: 'RECEIPT_LIST_LOADING'
    }
}

const setErrors = (errors) => {
    return {
        type: 'RECEIPT_LIST_SET_ERRORS',
        payload: errors
    }
}

const setReceipts = (receipts) => {
    return {
        type: 'RECEIPT_LIST_SET_LIST',
        payload: receipts
    }
}

export const fetchReceipts = (userId) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios.get(`${url}/receipt/list/${userId}`, {
            withCredentials: true
        });
        const receipts = res.data;
        dispatch(setReceipts(receipts));
    } catch(err) {
        console.log(err);
        dispatch(setErrors(err.response?.statusText || err.message));
    }
}

