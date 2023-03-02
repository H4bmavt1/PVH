const productState = {
    loading: true,
    products: [],
    errors: null,
    product: {},
    loadingDetail: true,
    errorsDetail: null
}

const productReducer = (state = productState, action) => {
    switch(action.type) {
        case "FETCH_DATA":
            return {...state, loading: true};
        case "FETCH_DATA_DETAIL":
            return {...state, loadingDetail: true};
        case "SET_PRODUCTS": 
            return {...state, loading: false, products: action.payload}
        case "SET_ERRORS": 
            return {...state, loading: false, errors: action.payload}
        case "SET_PRODUCT": 
            return {...state, loadingDetail: false, product: action.payload}
        case "SET_ERRORS_DETAIL": 
            return {...state, loadingDetail: false, errorsDetail: action.payload}
        default:
            return state;
    }
}

export default productReducer;