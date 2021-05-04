import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';

// actions  - describe what action we want to perform in store
const increment = () => {
    return {
        type: 'INCREMENT',
    };
};

const decrement = () => {
    return {
        type: 'DECREMENT',
    };
};

// Reducer - manage how should the store change
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
};

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(increment());

store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));
