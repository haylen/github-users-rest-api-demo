import { useBoolean } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

import { extractSinceIdFromLinkHeader, getUsers } from 'api/github';
import {
  addUserOverviews,
  setUserIdForNextFetch,
} from 'components/shared/UsersContextProvider/actions';
import useLoadedUserOverviewUsernames from 'components/shared/UsersContextProvider/hooks/useLoadedUserOverviewUsernames';
import useUserIdForNextFetch from 'components/shared/UsersContextProvider/hooks/useUserIdForNextFetch';
import useUsersContext from 'components/shared/UsersContextProvider/hooks/useUsersContext';
import useMountedState from 'hooks/useMountedState';

const INFINITE_SCROLL_BOTTOM_MARGIN = 300;

const useLoadUserOverviews = () => {
  const { dispatch } = useUsersContext();
  const loadedUsernames = useLoadedUserOverviewUsernames();
  const userIdForNextFetch = useUserIdForNextFetch();

  const [isFetching, setIsFetching] = useBoolean(false);
  const [error, setError] = useState(null);

  const checkIsMounted = useMountedState();

  const fetchGitHubUsers = useCallback(async () => {
    setIsFetching.on();

    try {
      const payload = await getUsers(userIdForNextFetch);
      const sinceId = extractSinceIdFromLinkHeader(payload.headers.link);

      dispatch(addUserOverviews(payload.data));
      dispatch(setUserIdForNextFetch(sinceId));
    } catch {
      if (!checkIsMounted()) return;

      setError('Fetching of users failed. Please refresh the page.');
    }

    setIsFetching.off();
  }, [setIsFetching, userIdForNextFetch, dispatch, checkIsMounted]);

  // Initial users batch fetching
  useEffect(() => {
    if (loadedUsernames?.length || isFetching || error) return;

    fetchGitHubUsers();
  }, [loadedUsernames, isFetching, error, fetchGitHubUsers]);

  useLayoutEffect(() => {
    const throttledFetch = throttle(() => {
      const { scrollHeight, clientHeight, scrollTop } =
        document.documentElement;
      const isInLoadMoreArea =
        scrollHeight - INFINITE_SCROLL_BOTTOM_MARGIN < clientHeight + scrollTop;

      if (!isFetching && isInLoadMoreArea) fetchGitHubUsers();
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
