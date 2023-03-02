const defaultState = {
    isOpen: false,
    text: ''
}

const messageReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'OPEN_MESSAGE':
            return {...state, isOpen: true, text: action.payload};
        case 'CLOSE_MESSAGE':
            return {...state, isOpen: false};
        case 'SET_MESSAGE':
            return {...state, text: action.payload};
        default:
            return state;
    }
}

export default messageReducer;