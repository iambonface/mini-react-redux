//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './app/containers/App';
//import registerServiceWorker from './registerServiceWorker';

/*const mathReducer = (state = {
    result: 1,
    lastValue: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValue: [...state.lastValue, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValue: [...state.lastValue, action.payload]
            };
            break;
    }
    return state;
};*/

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const mathReducer = (state = {
    result: 1,
    lastValue: [],
    }, action) => {
        switch (action.type) {
            case "ADD":
                state = {
                    ...state,
                    result: state.result + action.payload,
                    lastValue: [...state.lastValue, action.payload]
                };
                break;
            case "SUBTRACT":
                state = {
                    ...state,
                    result: state.result - action.payload,
                    lastValue: [...state.lastValue, action.payload]
                };
                break;
        }
        return state;
    };
const userReducer = (state = {
    name: "Bonface",
    age: 25,
    }, action) => {
        switch (action.type) {
            case "SET_NAME":
                state = {
                    ...state,
                    name: action.payload,
                };
                break;
            case "SET_AGE":
                state = {
                    ...state,
                    age: action.payload,
                };
                break;
        }
        return state;
    };

const myLogger = (store) => (next) => (action) => {
    console.log("Logged action", action)
    next(action)
}

const store = createStore(combineReducers({
    mathReducer, userReducer
}), {}, applyMiddleware(logger));

store.subscribe(() => {
    //console.log("Store updated", store.getState())
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});

store.dispatch({
    type: "SET_AGE",
    payload: 25
})
