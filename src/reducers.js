import { combineReducers } from 'redux';
import actorReducer from './actors/duck';
import movieReducer from './movies/duck';

const rootReducer = combineReducers({
    actors: actorReducer,
    movies: movieReducer,
});

export default rootReducer;
