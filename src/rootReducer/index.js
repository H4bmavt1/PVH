import {combineReducers} from 'redux'
import navbarReducer from './navbarReducer';
import cardReducer from './cardReducer';
import productReducer from './productReducer';
import productListReducer from './productListReducer';
import searchReducer from './searchReducer';
import messageReducer from './messageReducer';
import accountReducer from './accountReducer';
import receiptReducer from './receiptReducer';
import receiptListReducer from './receiptListRecuder';
import commentReducer from './commentReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
    nav: navbarReducer,
    card: cardReducer,
    products: productReducer,
    productList: productListReducer,
    search: searchReducer,
    message: messageReducer,
    account: accountReducer,
    receipt: receiptReducer,
    receiptList: receiptListReducer,
    comment: commentReducer,
    admin: adminReducer
})

export default rootReducer