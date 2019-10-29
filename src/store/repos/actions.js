import {createAction} from 'redux-actions';
import * as types from './actionTypes';

export const listReposRequested = createAction(types.LIST_REPOS_REQUESTED);
export const listReposFulfilled = createAction(types.LIST_REPOS_FULFILLED);
export const listReposRejected = createAction(types.LIST_REPOS_REJECTED);
