import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
const { createStore } = require('redux');





//  to set default of states
const defaultState = { value: 10 }
// reducer
// if state is undified, it will use default state
const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
}

// create store
const store = createStore(reducer);   
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));