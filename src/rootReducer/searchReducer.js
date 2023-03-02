const defaultState = {
    loading: true,
    result: [],
    errors: null
}

const searchReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_LOADING_SEARCH':
            return {...state, loading: true};
        case 'SET_RESULT':
            return {...state, loading: false, result: action.payload};
        case 'SET_ERRORS_SEARCH':
            return {...state, loading: false, errors: action.payload};
        
        default:
            return state;
    }
}

export default searchReducer;