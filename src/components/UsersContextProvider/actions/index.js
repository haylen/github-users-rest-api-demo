export const ADD_USER_OVERVIEWS = 'ADD_USER_OVERVIEWS';
export const ADD_USER_DETAILS = 'ADD_USER_DETAILS';
export const SET_USER_ID_FOR_NEXT_FETCH = 'SET_USER_ID_FOR_NEXT_FETCH';

export const addUserOverviews = (data) => ({
  type: ADD_USER_OVERVIEWS,
  payload: data,
});

export const addUserDetails = (data) => ({
  type: ADD_USER_DETAILS,
  payload: data,
});

export const setUserIdForNextFetch = (data) => ({
  type: SET_USER_ID_FOR_NEXT_FETCH,
  payload: data,
});
