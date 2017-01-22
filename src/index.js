import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore( () => {}, {});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


