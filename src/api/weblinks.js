import { API_DEV, API_HOST } from '../constants/URL';

export const getAllLinks = (signal) => {
  const url = `${API_DEV}/recommended-websites`;

  return fetch(url, { signal: signal })
    .then((response) => response.json())
    .then((result) => result);
};
