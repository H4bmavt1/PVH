import axios from "axios"
import { url } from "../data"

export const openRegister = () => {
    return {
        type: 'OPEN_REGISTER'
    }
}

export const closeRegister = () => {
    return {
        type: 'CLOSE_REGISTER'
    }
}

export const openSignIn = () => {
    return {
        type: 'OPEN_SIGNIN'
    }
}

export const closeSignIn = () => {
    return {
        type: 'CLOSE_SIGNIN'
    }
}

const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

const setLoading = () => {
    return {
        type: 'LOADING_USER'
    }
}

export const openUpdateInfo = () => {
    return {
        type: 'OPEN_UPDATE_INFO'
    }
}

export const closeUpdateInfo = () => {
    return {
        type: 'CLOSE_UPDATE_INFO'
    }
}

export const setErrors = (errors) => {
    return {
        type: 'SET_ERRORS_USER',
        payload: errors
    }
}

export const fetchUser = (data) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios({
            method: 'POST',
            url: `${url}/user/register`,
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            data: JSON.stringify(data)
        });
        const user = res.data;
        if(user.errors) {
            dispatch(setErrors(user.errors));
        } else {
            dispatch(setUser(user));
        }
    } catch(err) {
        console.log(err);
    }
}

export const getInforUser = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios.get(`${url}/user/info`, {
            withCredentials: true
        });
        const user = res.data;
        if(user.errors) {
            dispatch(setErrors(user.errors));
        } else {
            dispatch(setUser(user));
        }
    } catch(err) {
        console.log(err);
    }
}

export const signIn = (data) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios({
            method: 'POST',
            url: `${url}/user/signin`,
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            data: JSON.stringify(data)
        });
        const user = res.data;
        if(user.errors) {
            dispatch(setErrors(user.errors));
        } else {
            dispatch(setUser(user));
        }
    } catch(err) {
        console.log(err);
    }
}

export const logOut = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        await axios.get(`${url}/user/logout`, {
            withCredentials: true
        })
        dispatch(setUser({name: '', email: '', address: ''}));
    } catch(err) {
        console.log(err);
    }
}

export const changeInfo = (data) => async (dispatch) => {
    dispatch(setLoading());
    try {
        const res = await axios.put(`${url}/user/update`, data, {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        const user = res.data;
        if(user.errors) {
            dispatch(setErrors(user.errors));
        } else {
            dispatch(setUser(user));
            dispatch(closeUpdateInfo());
        }
    } catch(err) {
        console.log(err);
    }
}