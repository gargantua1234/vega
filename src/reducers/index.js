import counterReducer from './counter';
import loggedReducer from './login';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    couner: counterReducer,
    logged: loggedReducer,
});

export default allReducers;
