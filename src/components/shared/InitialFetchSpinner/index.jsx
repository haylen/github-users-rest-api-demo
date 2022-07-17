import { Box, Spinner, useColorModeValue } from '@chakra-ui/react';

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
      emptyColor={useColorModeValue('gray.200', 'gray.700')}
      color={useColorModeValue('gray.400', 'gray.900')}
      size="xl"
    />
  </Box>
);

export default InitialFetchSpinner;
