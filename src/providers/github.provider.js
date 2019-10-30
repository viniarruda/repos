import axios from 'axios';

import {api} from '../utils';

const ENDPOINTS = {
  REPOS: `${api}/search/repositories`,
};

export const getReposRequest = repoName => {
  return axios
    .get(`${ENDPOINTS.REPOS}?q=${repoName}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};
