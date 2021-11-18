import useUsersContext from 'components/shared/UsersContextProvider/hooks/useUsersContext';

const useUserOverview = (username) => {
  const { state } = useUsersContext();

  return state.userOverviews[username];
};

export default useUserOverview;
