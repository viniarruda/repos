import {getReposRequest} from '../../providers/github.provider';
import * as ReposActions from './actions';

export const getRepos = repoName => async dispatch => {
  dispatch(ReposActions.listReposRequested());
  const {items, message} = await getReposRequest(encodeURI(repoName));

  if (!items.length) {
    dispatch(ReposActions.listReposRejected(message));
    return false;
  }

  dispatch(ReposActions.listReposFulfilled(items));
  return true;
};
