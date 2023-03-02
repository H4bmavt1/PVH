import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../../rootReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppProvider = ({children}) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>

        </div>
    )
}

export default AppProvider
