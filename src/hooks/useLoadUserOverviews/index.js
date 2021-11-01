import { useBoolean } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { getUsers } from 'api/github';
import { addUserOverviews } from 'components/UsersContextProvider/actions';
import useLoadedUserOverviewUsernames from 'components/UsersContextProvider/hooks/useLoadedUserOverviewUsernames';
import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';
import useMountedState from 'hooks/useMountedState';

const useLoadUserOverviews = () => {
  const { dispatch } = useUsersContext();
  const loadedUsernames = useLoadedUserOverviewUsernames();

  const [isFetching, setIsFetching] = useBoolean();
  const [error, setError] = useState(false);

  const checkIsMounted = useMountedState();

  const fetchGitHubUsers = useCallback(async () => {
    setIsFetching.on();

    try {
      const payload = await getUsers();

      dispatch(addUserOverviews(payload.data));
    } catch {
      if (!checkIsMounted()) return;

      setError('Fetching of users failed. Please refresh the page.');
    }

    setIsFetching.off();
  }, [setIsFetching, dispatch, checkIsMounted]);

  useEffect(() => {
    if (loadedUsernames?.length || isFetching || error) return;

    fetchGitHubUsers();
  }, [loadedUsernames, isFetching, error, fetchGitHubUsers]);

  return [
    loadedUsernames,
    isFetching || (!loadedUsernames?.length && !error),
    error,
  ];
};

export default useLoadUserOverviews;
