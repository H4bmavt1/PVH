const defaultState = {
    loading: false,
    productList: [],
    errors: null,
    pages: 1
};

const productListReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {...state, loading: true};
        case 'SET_PRODUCT_LIST':
            return {...state, loading: false, productList: action.payload.products, pages: action.payload.pages, errors: null};
        case 'SET_ERRORS_PRODUCT_LIST':
            return {...state, loading: false, errors: action.payload};
        default:
            return state;
    }
}

export default productListReducer;