import { useContext } from 'react';

import { UsersContext } from 'components/shared/UsersContextProvider';

const useUsersContext = () => {
  const context = useContext(UsersContext);

  if (context === undefined) {
    throw new Error(
      'useUsersContext must be used within a UsersContextProvider',
    );
  }

  return context;
};

export default useUsersContext;
