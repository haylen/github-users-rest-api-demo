import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';

const useLoadedUserOverviewUsernames = () => {
  const { state } = useUsersContext();

  return state.loadedUserOverviewUsernames;
};

export default useLoadedUserOverviewUsernames;
