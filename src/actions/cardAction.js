export const openCard = () => {
    return {
        type: 'OPEN'
    }
}

export const closeCard = () => {
    return {
        type: 'CLOSE'
    }
}

export const addProduct = (product) => {
    const products = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [];
    let isIncrement = false;
    const newProducts = products.map(item => {
        if(item._id === product._id) {
            isIncrement = true;
            return {...item, quantity: item.quantity + 1};
        }
        return item;
    })
    if(!isIncrement) {
        products.push(product);
        localStorage.setItem('card', JSON.stringify(products));
    } else {
        localStorage.setItem('card', JSON.stringify(newProducts));
    }
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const setProducts = () => {
    const products = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [];
    return {
        type: 'SET_PRODUCTS_CARD',
        payload: products
    }
}

export const increment = (_id) => {
    const products = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [];
    const newProducts = products.map(product => {
        if(product._id === _id) {
            return {...product, quantity: product.quantity + 1};
        }
        return product;
    })
    localStorage.setItem('card', JSON.stringify(newProducts));
    return {
        type: 'INCREMENT_CARD',
        payload: _id
    }
}

export const decrement = (_id) => {
    const products = localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [];
    const newProducts = products.map(product => {
        if(product._id === _id) {
            return {...product, quantity: product.quantity - 1};
        }
        return product
    }).filter((product) => {
        return product.quantity > 0;
    })
    localStorage.setItem('card', JSON.stringify(newProducts));
    return {
        type: 'DECREMENT',
        payload: _id
    }
}

export const getTotal = () => {
    return {
        type: 'GET_TOTAL'
    }
}

export const clearCard = () => {
    localStorage.removeItem('card');
    return {
        type: 'CLEAR_CARD'
    }
}