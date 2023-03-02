export const openMessage = (text) => {
    return {
        type: 'OPEN_MESSAGE',
        payload: text
    }
}

export const closeMessage = () => {
    return {
        type: 'CLOSE_MESSAGE'
    }
}

export const setMessage = (text) => {
    return {
        type: 'SET_MESSAGE',
        payload: text
    }
}