import types from './types';

const movieAction = {
    add: (movie) => ({ type: types.ADD_MOVIE, movie }),
    reset: () => ({ type: types.RESET_MOVIE }),
};

export default movieAction;
