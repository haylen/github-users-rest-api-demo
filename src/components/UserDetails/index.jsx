import { Box, Button, Center, Container } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

import InitialFetchSpinner from 'components/shared/InitialFetchSpinner';
import Avatar from 'components/UserDetails/Avatar';
import DetailsList from 'components/UserDetails/DetailsList';
import SocialLinks from 'components/UserDetails/SocialLinks';
import useLoadUserDetails from 'hooks/useLoadUserDetails';

const UserDetails = () => {
  const { username } = useParams();

  const history = useHistory();

  const [user, isFetching, error] = useLoadUserDetails(username);

  if (isFetching) return <InitialFetchSpinner />;

  if (error) return error;

  return (
    <Container maxW="container.sm" py="16">
      <Center bg="gray.50" borderRadius="xl" boxShadow="md" mb="12" py="8">
        <Box w="100%">
          <Box mb="8">
            <Avatar avatarUrl={user.avatarUrl} />
          </Box>

          <Box mb="4">
            <SocialLinks user={user} />
          </Box>

          <DetailsList user={user} />
        </Box>
      </Center>

      <Button onClick={history.goBack} variant="link">
        Back
      </Button>
    </Container>
  );
};

export default UserDetails;
