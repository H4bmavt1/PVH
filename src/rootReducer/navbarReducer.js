const items = [
    {
        type: 'link',
        title: 'Home',
        url: '/e-commerce'
    },
    {
        type: 'link',
        title: 'Products',
        url: '/e-commerce/products'
    },
    {
        type: 'button',
        title: 'Manufacturers',
        links: [
            
        ],
        url: '/e-commerce/manufacturer?page=1'
    },
    {
        type: 'button',
        title: 'Classes',
        links: [
            
        ],
        url: '/e-commerce/class'
    },
    {
        type: 'link',
        title: 'Contact',
        url: '/e-commerce/contact'
    },
    
]

const nav = {
    items: items,
    activeNav: false,
    activeSearchTerm: false,
    errors: null
}

const navbarReducer = (state = nav, action) => {
    switch(action.type) {
        case 'OPEN_NAV':
            return {...state, activeNav: true};
        case 'CLOSE_NAV':
            return {...state, activeNav: false};
        case 'OPEN_SEARCH':
            return {...state, activeSearchTerm: true};
        case 'CLOSE_SEARCH':
            return {...state, activeSearchTerm: false};
        case 'SET_MANUFACTURERS':
            const links = action.payload;
            const items = state.items.map(item => {
                if(item.title === 'Manufacturers') {
                    return {...item, links: links};
                }
                return item;
            })
            return {...state, items: items};
        case 'SET_CLASSES':
            const classes = action.payload;
            const listItem = state.items.map(item => {
                if(item.title === 'Classes') {
                    return {...item, links: classes};
                }
                return item;
            })
            return {...state, items: listItem};
        case 'SET_ERRORS':
            return {...state, errors: action.errors};
        default:
            return state;
    }
}

export default navbarReducer