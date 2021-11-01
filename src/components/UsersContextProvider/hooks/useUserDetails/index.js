import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';

const useUserDetails = (username) => {
  const { state } = useUsersContext();

  return state.userDetails[username];
};

export default useUserDetails;
