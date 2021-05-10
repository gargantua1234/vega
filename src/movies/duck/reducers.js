import types from './types';

const INITIAL_STATE = {
    itemsName: 'Favourite movies',
    items: ['Rambo', 'Hakerzy', 'Matrix'],
};

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_MOVIE:
            if (state.items.includes(action.movie)) return state;
            return { ...state, items: [...state.items, action.movie] };
        case types.RESET_MOVIE:
            return { ...state, items: [] };
        default:
            return state;
    }
};

export default movieReducer;
