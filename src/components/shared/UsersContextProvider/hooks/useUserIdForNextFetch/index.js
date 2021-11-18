import useUsersContext from 'components/shared/UsersContextProvider/hooks/useUsersContext';

const useUserIdForNextFetch = () => {
  const { state } = useUsersContext();

  return state.userIdForNextFetch;
};

export default useUserIdForNextFetch;
