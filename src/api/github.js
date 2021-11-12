import { request } from '@octokit/request';

const requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

export const getUsers = (since = null) =>
  requestWithAuth(`GET /users`, { since, per_page: 30 });

export const getUser = (username) =>
  requestWithAuth('GET /users/{username}', {
    username,
  });

/**
 * Extract "since" value from a getUsers response "Link" header
 * @param  {String} linkHeader The value of a "Link" header. Example: <https://api.github.com/users?since=10>; rel="next", <https://api.github.com/users{?since}>; rel="first"
 * @return {String}            The extracted "since" value. Example: "10"
 */
export const extractSinceIdFromLinkHeader = (linkHeader) => {
  const nextLinkSlice = linkHeader.split(';')[0];

  const fullLinkRegEx = new RegExp('[^<](.*)[^>]', 'g');
  const fullLink = nextLinkSlice.match(fullLinkRegEx)[0];

  const url = new URL(fullLink);
  const sinceRegEx = new RegExp('[^?since=]([0-9]*)', 'g');
  const sinceId = url.search.match(sinceRegEx)[0];

  return sinceId;
};
