import axios from "axios"
import { url } from "../data"

const setLoadingComment = () => {
    return {
        type: 'SET_LOADING_COMMENT'
    }
}

const setErrorsComment = (errors) => {
    return {
        type: 'SET_ERRORS_COMMENT',
        payload: errors
    }
}

const setComments = (comments) => {
    return {
        type: 'SET_COMMENTS',
        payload: comments
    }
}

export const fetchComments = (productId) => async (dispatch) => {
    dispatch(setLoadingComment());
    try {
        const res = await axios.get(`${url}/comment/${productId}`);
        dispatch(setComments(res.data));
    } catch(err) {
        console.log(err);
        dispatch(setErrorsComment(err.response?.statusText || err.message));
    }
}


export const addComment = (productId, text) => async (dispatch, getState) => {
    dispatch(setLoadingComment());
    try {
        const res = await axios.post(`${url}/comment/create`, {productId, text}, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        });
        const newComment = getState().comment.comments;
        newComment.push(res.data);
        dispatch(setComments(newComment));
    } catch(err) {
        console.log(err);
        dispatch(setErrorsComment(err.response?.statusText || err.message));
    }
}

export const deleteComment = (id) => async (dispatch, getState) => {
    dispatch(setLoadingComment());
    try {
        await axios.delete(`${url}/comment/delete/${id}`, {
            withCredentials: true
        });
        const newComment = getState().comment.comments.filter(comment => {
            return comment._id !== id;
        });
        dispatch(setComments(newComment));
    } catch(err) {
        console.log(err);
        dispatch(setErrorsComment(err.response?.statusText || err.message));
    }
}

export const likeComment = (id) => async (dispatch, getState) => {
    dispatch(setLoadingComment());
    try {
        const res = await axios.put(`${url}/comment/like`, {id: id}, {
            withCredentials: true
        });
        const newComment = getState().comment.comments.map(comment => {
            if(comment._id === res.data._id) {
                return res.data;
            }
            return comment;
        });
        dispatch(setComments(newComment));
    } catch(err) {
        console.log(err);
        dispatch(setErrorsComment(err.response?.statusText || err.message));
    }
}

export const dislikeComment = (id) => async (dispatch, getState) => {
    dispatch(setLoadingComment());
    try {
        const res = await axios.put(`${url}/comment/dislike`, {id: id}, {
            withCredentials: true
        });
        const newComment = getState().comment.comments.map(comment => {
            if(comment._id === res.data._id) {
                return res.data;
            }
            return comment;
        });
        dispatch(setComments(newComment));
    } catch(err) {
        console.log(err);
        dispatch(setErrorsComment(err.response?.statusText || err.message));
    }
}