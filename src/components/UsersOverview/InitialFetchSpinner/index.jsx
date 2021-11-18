import { Box, Spinner } from '@chakra-ui/react';

const InitialFetchSpinner = () => (
  <Box
    position="absolute"
    top="50%"
    left="50%"
    transform="translate(-50%, -50%)"
  >
    <Spinner
      thickness="0.3rem"
      speed="0.65s"
      emptyColor="gray.200"
      color="gray.400"
      size="xl"
    />
  </Box>
);

export default InitialFetchSpinner;
