import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

import InitialFetchSpinner from 'components/shared/InitialFetchSpinner';
import useLoadUserDetails from 'hooks/useLoadUserDetails';

const UserDetails = () => {
  const { username } = useParams();

  const history = useHistory();

  const [user, isFetching, error] = useLoadUserDetails(username);

  if (isFetching) return <InitialFetchSpinner />;

  if (error) return error;

  return (
    <Container maxW="container.lg">
      <Button onClick={history.goBack}>Back</Button>

      <Flex wrap="wrap" justify="space-around">
        <Box>
          <Image
            src={user.avatarUrl}
            alt={`${user.avatarUrl} avatar`}
            boxSize="250px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Text fontSize="2xl">{user.login}</Text>
          <Text fontSize="2xl">{user.name}</Text>
          <Text fontSize="2xl">{user.email}</Text>
          <Text fontSize="2xl">{user.bio}</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default UserDetails;
