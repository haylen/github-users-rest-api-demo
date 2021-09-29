import { request } from '@octokit/request';

const requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export const getUsers = () => requestWithAuth('GET /users');

export const getUser = (username) =>
  requestWithAuth('GET /users/{username}', {
    username,
  });
