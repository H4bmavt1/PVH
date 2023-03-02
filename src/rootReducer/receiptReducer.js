const defaultState = {
    errors: null,
    loading: false,
    receipt: {
        _id: '',
        user: '',
        products: [],
    }
}

const receiptReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOADING_RECEIPT':
            return {...state, loading: true};
        case 'SET_RECEIPT':
            return {...state, loading: false, receipt: action.payload, errors: null};
        case 'SET_RECEIPT_ERRORS':
            return {...state, loading: false, errors: action.payload};

        default:
            return state;
    }
}

export default receiptReducer;