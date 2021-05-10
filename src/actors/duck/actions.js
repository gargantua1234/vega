import types from './types';

const actions = {
    add: (actor) => ({ type: types.ADD_ACTOR, actor }),
    reset: () => ({ type: types.RESET_ACTOR }),
};

export default actions;
