import { Box, Container, Flex } from '@chakra-ui/react';

import UserItem from 'components/UsersOverview/UserItem';
import useLoadUserOverviews from 'hooks/useLoadUserOverviews';

const UsersOverview = () => {
  const [loadedUsernames, isFetching, error] = useLoadUserOverviews();

  if (error) return error;

  return (
    <Container maxW="container.lg">
      <Flex wrap="wrap" justify="space-around">
        {loadedUsernames.map((username) => (
          <Box key={username} p="20px">
            <UserItem username={username} />
          </Box>
        ))}
      </Flex>

      {isFetching ? (
        <Box p="20px" textAlign="center">
          Fetching...
        </Box>
      ) : null}
    </Container>
  );
};

export default UsersOverview;
