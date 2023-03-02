import axios from "axios"
import { url } from "../data"

export const openSubmenu = (text, position) => {
    return {
        type: 'OPEN_SUBMENU',
        payload: {text, position}
    }
}

export const closeSubmenu = () => {
    return {
        type: 'CLOSE_SUBMENU'
    }
}

export const openNav = () => {
    return {
        type: 'OPEN_NAV'
    }
}

export const closeNav = () => {
    return {
        type: 'CLOSE_NAV'
    }
}

export const openSearch = () => {
    return {
        type: 'OPEN_SEARCH'
    }
}

export const closeSearch = () => {
    return {
        type: 'CLOSE_SEARCH'
    }
}

const setManufacturers = (manufacturers) => {
    return {
        type: 'SET_MANUFACTURERS',
        payload: manufacturers
    }
}

const setErrors = (errors) => {
    return {
        type: 'SET_ERRORS',
        payload: errors
    }
}

const setClasses = (classes) => {
    return {
        type: 'SET_CLASSES',
        payload: classes
    }
}

export const fetchManufacturers = () => (dispatch) => {
    Promise.all([
        axios.get(`${url}/manufacturers/list`),
        axios.get(`${url}/classes/list`)
    ]) 
    .then(([res1, res2]) => {
        const manufacturers = res1.data;
        const classes = res2.data;
        dispatch(setManufacturers(manufacturers));
        dispatch(setClasses(classes));
    })
    .catch((err) => {
        console.log(err.response?.statusText || err.message)
        dispatch(setErrors(err.response?.statusText || err.message));
    })
}