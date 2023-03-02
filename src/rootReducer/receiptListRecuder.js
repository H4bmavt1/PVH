const defaultState = {
    loading: false,
    errors: null,
    receipts: [],
}

const receiptListReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'RECEIPT_LIST_LOADING':
            return {...state, loading: true};
        case 'RECEIPT_LIST_SET_ERRORS':
            return {...state, errors: action.payload, loading: false};
        case 'RECEIPT_LIST_SET_LIST':
            return {...state, receipts: action.payload, errors: null, loading: false};

        default:
            return state;
    }
}

export default receiptListReducer;