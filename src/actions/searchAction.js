import axios from "axios"
import { url } from "../data"

const setLoading = () => {
    return {
        type: 'SET_LOADING_SEARCH'
    }
}

export const setResult = (result) => {
    return {
        type: 'SET_RESULT',
        payload: result
    }
}

const setErrors = (errors) => {
    return {
        type: 'SET_ERRORS_SEARCH',
        payload: errors
    }
}

export const fetchSearch = (query) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const result = await axios.get(`${url}/products/search?product=${query}`);
        dispatch(setResult(result.data));
    } catch(err) {
        dispatch(setErrors(err.response.statusText));
        console.log(err.response.statusText);
    }
}