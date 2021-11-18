import {
  ADD_USER_OVERVIEWS,
  ADD_USER_DETAILS,
  SET_USER_ID_FOR_NEXT_FETCH,
} from 'components/UsersContextProvider/actions';

export const INITIAL_STATE = {
  /**
   * Object for keeping user records from [List users endpoint](https://docs.github.com/en/rest/reference/users#list-users)
   * key - user's login
   * value - user's details (shortened set of user attributes)
   */
  userOverviews: {},

  /**
   * Object for keeping user records from [Get a user endpoint](https://docs.github.com/en/rest/reference/users#get-a-user)
   * key - user's login
   * value - user's details (complete set of user attributes)
   */
  userDetails: {},

  /**
   * List of all "login" attr values storeed in "userOverviews"
   */
  loadedUserOverviewUsernames: [],

  /**
   * User id that will be used for fetching a next batch for "userOverviews"
   */
  userIdForNextFetch: null,
};

const addUserOverviewsReducer = (state, action) => {
  const normalizedUsers = action.payload.reduce((acc, user) => {
    acc[user.login] = {
      login: user.login,
      avatarUrl: user.avatar_url,
    };

    return acc;
  }, {});

  const newUsernames = Object.keys(normalizedUsers);

  return {
    ...state,
    loadedUserOverviewUsernames: [
      ...state.loadedUserOverviewUsernames,
      ...newUsernames,
    ],
    userOverviews: { ...state.userOverviews, ...normalizedUsers },
  };
};

const addUserDetailsReducer = (state, action) => {
  const user = action.payload;

  return {
    ...state,
    userDetails: {
      ...state.userDetails,
      [user.login]: {
        login: user.login,
        avatarUrl: user.avatar_url,
      },
    },
  };
};

const setUserIdForNextFetchReducer = (state, action) => ({
  ...state,
  userIdForNextFetch: action.payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_OVERVIEWS:
      return addUserOverviewsReducer(state, action);
    case ADD_USER_DETAILS:
      return addUserDetailsReducer(state, action);
    case SET_USER_ID_FOR_NEXT_FETCH:
      return setUserIdForNextFetchReducer(state, action);
    default:
      throw new Error('Unsupported action for a UsersContext');
  }
};

export default reducer;
