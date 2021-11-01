import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';

const useUserOverview = (username) => {
  const { state } = useUsersContext();

  return state.userOverviews[username];
};

export default useUserOverview;
