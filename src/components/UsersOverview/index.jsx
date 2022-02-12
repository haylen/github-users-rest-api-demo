import { Box, Container, Flex } from '@chakra-ui/react';

import ViewError from 'components/shared/errors/ViewError';
import InitialFetchSpinner from 'components/shared/InitialFetchSpinner';
import LoadMoreSpinner from 'components/UsersOverview/LoadMoreSpinner';
import ScrollToTopButton from 'components/UsersOverview/ScrollToTopButton';
import UserItem from 'components/UsersOverview/UserItem';
import useLoadUserOverviews from 'hooks/useLoadUserOverviews';

const UsersOverview = () => {
  const [loadedUsernames, isFetching, error] = useLoadUserOverviews();

  const isInitialFetching = isFetching && !loadedUsernames.length;
  const isSubsequentFetching = isFetching && !isInitialFetching;

  if (error) return <ViewError>{error}</ViewError>;

  return (
    <Container maxW="container.lg">
      <ScrollToTopButton />
      <Flex wrap="wrap" justify="center">
        {loadedUsernames.map((username) => (
          <Box key={username} p="1rem">
            <UserItem username={username} />
          </Box>
        ))}
      </Flex>

      {isInitialFetching ? <InitialFetchSpinner /> : null}

      {loadedUsernames.length ? (
        <LoadMoreSpinner isSpinning={isSubsequentFetching} />
      ) : null}
    </Container>
  );
};

export default UsersOverview;
