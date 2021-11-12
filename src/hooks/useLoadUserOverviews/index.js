import { useBoolean } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { extractSinceIdFromLinkHeader, getUsers } from 'api/github';
import { addUserOverviews } from 'components/UsersContextProvider/actions';
import useLoadedUserOverviewUsernames from 'components/UsersContextProvider/hooks/useLoadedUserOverviewUsernames';
import useUsersContext from 'components/UsersContextProvider/hooks/useUsersContext';
import useMountedState from 'hooks/useMountedState';

const INFINITE_SCROLL_BOTTOM_MARGIN = 300;

const useLoadUserOverviews = () => {
  const { dispatch } = useUsersContext();
  const loadedUsernames = useLoadedUserOverviewUsernames();

  const [isFetching, setIsFetching] = useBoolean(false);
  const [error, setError] = useState(false);

  const [lastFetchedUserId, setLastFetchedUserId] = useState(null);

  const checkIsMounted = useMountedState();

  const fetchGitHubUsers = useCallback(async () => {
    setIsFetching.on();

    try {
      const payload = await getUsers(lastFetchedUserId);
      const sinceId = extractSinceIdFromLinkHeader(payload.headers.link);

      setLastFetchedUserId(sinceId);
      dispatch(addUserOverviews(payload.data));
    } catch {
      if (!checkIsMounted()) return;

      setError('Fetching of users failed. Please refresh the page.');
    }

    setIsFetching.off();
  }, [setIsFetching, lastFetchedUserId, dispatch, checkIsMounted]);

  // Initial users batch fetching
  useEffect(() => {
    if (loadedUsernames?.length || isFetching || error) return;

    fetchGitHubUsers();
  }, [loadedUsernames, isFetching, error, fetchGitHubUsers]);

  useLayoutEffect(() => {
    const throttledFetch = throttle(() => {
      const { scrollHeight, clientHeight, scrollTop } =
        document.documentElement;

      if (
        !isFetching &&
        scrollHeight - INFINITE_SCROLL_BOTTOM_MARGIN < clientHeight + scrollTop
      ) {
        fetchGitHubUsers();
      }
    }, 300);

    window.addEventListener('scroll', throttledFetch);

    return () => {
      throttledFetch.cancel();
      window.removeEventListener('scroll', throttledFetch);
    };
  }, [isFetching, fetchGitHubUsers]);

  return [
    loadedUsernames,
    isFetching || (!loadedUsernames?.length && !error),
    error,
  ];
};

export default useLoadUserOverviews;
