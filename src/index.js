import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import { createStore } from 'redux'
import todoApp from './reducers/reducers'
import { Provider } from 'react-redux'

let store = createStore( todoApp );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


