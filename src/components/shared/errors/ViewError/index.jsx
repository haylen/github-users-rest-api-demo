import { Button, Container, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const refreshPage = () => window.location.reload(false);

const ViewError = ({ children }) => (
  <Container
    maxW="container.sm"
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
    textAlign="center"
  >
    <Text fontSize="3xl" fontWeight="bold" color="gray.400">
      {children}
    </Text>

    <Button onClick={refreshPage} variant="link" mt="10">
      <Text fontSize="xl">Refresh the page</Text>
    </Button>
  </Container>
);

ViewError.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ViewError;
