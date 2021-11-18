import { Box, Container, Flex } from '@chakra-ui/react';

import InitialFetchSpinner from 'components/UsersOverview/InitialFetchSpinner';
import LoadMoreSpinner from 'components/UsersOverview/LoadMoreSpinner';
import UserItem from 'components/UsersOverview/UserItem';
import useLoadUserOverviews from 'hooks/useLoadUserOverviews';

const UsersOverview = () => {
  const [loadedUsernames, isFetching, error] = useLoadUserOverviews();

  const isInitialFetching = isFetching && !loadedUsernames.length;
  const isSubsequentFetching = isFetching && !isInitialFetching;

  if (error) return error;

  return (
    <Container maxW="container.lg">
      <Flex wrap="wrap" justify="center">
        {loadedUsernames.map((username) => (
          <Box key={username} p="20px">
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
