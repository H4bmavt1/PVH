import axios from "axios"
import { url } from "../data"

const setReceiptLoading = () => {
    return {
        type: 'LOADING_RECEIPT'
    }
}

export const setReceipt = (receipt) => {
    return {
        type: 'SET_RECEIPT',
        payload: receipt
    }
}

const setErrors = (errors) => {
    return {
        type: 'SET_RECEIPT_ERRORS',
        payload: errors
    }
}

export const createReceipt = (data) => async (dispatch) => {
    dispatch(setReceiptLoading());
    try {
        const res = await axios.post(`${url}/receipt/create`, data, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        });
        const receipt = res.data;
        dispatch(setReceipt(receipt));
    } catch(err) {
        console.log(err);
        dispatch(setErrors(err.response?.statusText || err.message));
    }
}