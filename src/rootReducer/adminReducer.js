const defaultState = {
    isOpenFormProduct: false,
}

const adminReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'OPEN_FORM_PRODUCT':
            return {...state, isOpenFormProduct: true};
        case 'CLOSE_FORM_PRODUCT':
            return {...state, isOpenFormProduct: false};

        default:
            return state;
    }
}

export default adminReducer;
