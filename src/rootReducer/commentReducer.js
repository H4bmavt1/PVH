const defaultState = {
    loading: false,
    comments: [],
    errors: null
}

const commentReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_LOADING_COMMENT':
            return {...state, loading: true};
        case 'SET_ERRORS_COMMENT': 
            return {...state, loading: false, errors: action.payload};
        case 'SET_COMMENTS': 
            return {...state, loading: false, errors: null, comments: action.payload};


        default:
            return state;
    }
}

export default commentReducer;