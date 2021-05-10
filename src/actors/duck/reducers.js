import types from './types';

const INITIAL_STATE = {
    itemsName: 'favourite actors',
    items: ['Gerrard Buttler', 'Christian Bale', 'Tom Hardy'],
};

const actorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_ACTOR:
            return { ...state, items: [...state.items, action.actor] };
        case types.RESET_ACTOR:
            return { ...state, items: [] };
        default:
            return state;
    }
};

export default actorReducer;
