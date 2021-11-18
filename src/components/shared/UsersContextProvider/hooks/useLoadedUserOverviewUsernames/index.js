import useUsersContext from 'components/shared/UsersContextProvider/hooks/useUsersContext';

const useLoadedUserOverviewUsernames = () => {
  const { state } = useUsersContext();

  return state.loadedUserOverviewUsernames;
};

export default useLoadedUserOverviewUsernames;
