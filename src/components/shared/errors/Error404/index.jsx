import { Button, Container, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const Error404 = () => {
  const history = useHistory();

  const goHome = () => history.push('/');

  return (
    <Container
      maxW="container.sm"
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      textAlign="center"
    >
      <Text fontSize="8xl" fontWeight="bold" color="gray.400">
        404
      </Text>

      <Text fontSize="3xl" fontWeight="bold" color="gray.400">
        Page not found
      </Text>

      <Button onClick={goHome} variant="link" mt="10">
        <Text fontSize="xl">Home</Text>
      </Button>
    </Container>
  );
};

export default Error404;
