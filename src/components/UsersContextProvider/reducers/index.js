import {
  ADD_USER_OVERVIEWS,
  ADD_USER_DETAILS,
} from 'components/UsersContextProvider/actions';

export const INITIAL_STATE = {
  userOverviews: {},
  userDetails: {},
  currentUserOverviewsPage: 1,
  loadedUserOverviewUsernames: [],
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
    currentUserOverviewsPage: state.currentUserOverviewsPage + 1,
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

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER_OVERVIEWS:
      return addUserOverviewsReducer(state, action);
    case ADD_USER_DETAILS:
      return addUserDetailsReducer(state, action);
    default:
      throw new Error('Unsupported action for a UsersContext');
  }
};

export default reducer;
