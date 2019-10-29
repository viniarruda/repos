import {getReposRequest} from '../../providers/github.provider';
import * as ReposActions from './actions';

export const getRepos = username => async dispatch => {
  dispatch(ReposActions.listReposRequested());
  const response = await getReposRequest(username);

  if (!response.length) {
    dispatch(ReposActions.listReposRejected(response.message));
    return false;
  }

  dispatch(ReposActions.listReposFulfilled(response));
  return true;
};
