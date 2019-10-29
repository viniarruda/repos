import * as types from './actionTypes';

const INITIAL_STATE = {
  loading: false,
  list: null,
  error: null,
};

export default function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LIST_REPOS_REQUESTED: {
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    }
    case types.LIST_REPOS_FULFILLED:
      console.log('here');
      return {
        ...INITIAL_STATE,
        list: {
          ...action.payload,
        },
      };
    case types.LIST_REPOS_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
