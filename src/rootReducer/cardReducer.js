const defaultState = {
    isOpen: false,
    products: [],
    total: 0
}

const cardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'OPEN':
            return {...state, isOpen: true};
        case 'CLOSE':
            return {...state, isOpen: false};
        case 'ADD_PRODUCT':
            let isIncrement = false;
            const newProducts1 = state.products.map(item => {
                if(item._id === action.payload._id) {
                    isIncrement = true;
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            })
            if(!isIncrement) {
                newProducts1.push(action.payload);
            }
            return {...state, products: newProducts1};
        case 'SET_PRODUCTS_CARD':
            return {...state, products: action.payload};
        case 'INCREMENT_CARD':
            const newProducts = state.products.map(product => {
                if(product._id === action.payload) {
                    return {...product, quantity: product.quantity + 1};
                }
                return product;
            })
            return {...state, products: newProducts};
        case 'DECREMENT':
            return {...state, products: state.products.map(product => {
                if(product._id === action.payload) {
                    return {...product, quantity: product.quantity - 1};
                }
                return product;
            }).filter(product => {
                return product.quantity > 0;
            })}
        case 'GET_TOTAL': 
            if(state.products.length < 1) {
                return {...state, total: 0};
            }
            const total = state.products.reduce((prev, cur) => {
                const price = cur.price - (cur.price * (cur.sale / 100));
                return prev + price * cur.quantity;
            }, 0)
            return {...state, total: total};
        case 'CLEAR_CARD':
            return {...state, products: []};
        default:
            return state;
    }
}

export default cardReducer;