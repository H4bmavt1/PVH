const defaultState = {
    isOpenRegister: false,
    isOpenSignIn: false,
    isOpenUpdateInfo: false,
    user: {
        name: '',
        email: '',
        address: ''
    },
    loading: false,
    errors: null
}

const accountReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'OPEN_REGISTER':
            return {...state, isOpenRegister: true};
        case 'CLOSE_REGISTER':
            return {...state, isOpenRegister: false};
        case 'OPEN_SIGNIN':
            return {...state, isOpenSignIn: true};
        case 'CLOSE_SIGNIN':
            return {...state, isOpenSignIn: false};
        case 'OPEN_UPDATE_INFO':
            return {...state, isOpenUpdateInfo: true};
        case 'CLOSE_UPDATE_INFO':
            return {...state, isOpenUpdateInfo: false};
        case 'LOADING_USER':
            return {...state, loading: true};
        case 'SET_USER':
            return {...state, loading: false, user: action.payload, errors: null};
        case 'SET_ERRORS_USER':
            return {...state, loading: false, errors: action.payload};

        default:
            return state;
    }
}

export default accountReducer;