import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';

const useUserIdForNextFetch = () => {
  const { state } = useUsersContext();

  return state.userIdForNextFetch;
};

export default useUserIdForNextFetch;
