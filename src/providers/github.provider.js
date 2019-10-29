import axios from 'axios';

import {api} from '../utils';

const ENDPOINTS = {
  REPOS: `${api}/users`,
};

export const getReposRequest = username => {
  return axios
    .get(`${ENDPOINTS.REPOS}/${username}/repos`)
    .then(res => res.data)
    .catch(err => err.response.data);
};
