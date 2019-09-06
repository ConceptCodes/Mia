import * as types from './mutation-types';

export const setFoo = ({ commit }, payload) => {
  commit(types.UPDATE_FOO, payload);
};

export const updateText = ({ commit }, payload) => {
  commit(types.UPDATE_TEXT, payload);
};
