import { useBoolean } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { getUser } from 'api/github';
import { addUserDetails } from 'components/UsersContextProvider/actions';
import useContextUserDetails from 'components/UsersContextProvider/hooks/useUserDetails';
import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';
import useMountedState from 'hooks/useMountedState';

const useLoadUserDetails = (username) => {
  const { dispatch } = useUsersContext();
  const userDetails = useContextUserDetails(username);

  const [isFetching, setIsFetching] = useBoolean();
  const [error, setError] = useState(false);

  const checkIsMounted = useMountedState();

  const fetchGitHubUser = useCallback(async () => {
    setIsFetching.on();

    try {
      const payload = await getUser(username);

      dispatch(addUserDetails(payload.data));
    } catch {
      if (!checkIsMounted()) return;

      setError('Fetching of a user record failed. Please refresh the page.');
    }

    setIsFetching.off();
  }, [setIsFetching, username, dispatch, checkIsMounted]);

  useEffect(() => {
    if (userDetails || isFetching || error) return;

    fetchGitHubUser();
  }, [userDetails, isFetching, error, fetchGitHubUser]);

  return [userDetails, isFetching || (!userDetails && !error), error];
};

export default useLoadUserDetails;
