import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { Provider } from 'react-redux';

import store from "./store";


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();