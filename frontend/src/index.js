import React from 'react'
import './bootstrap.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/store'

const store = ConfigureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)