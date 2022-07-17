import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import ColorModeToggle from 'components/shared/PageLayout/ColorModeToggle';

const PageLayout = ({ children }) => (
  <Box>
    <Box
      as="header"
      position="fixed"
      h="3rem"
      w="100%"
      bg={useColorModeValue('gray.50', 'gray.700')}
      boxShadow="sm"
      zIndex="1"
    >
      <Container
        h="100%"
        maxW="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <ColorModeToggle />
      </Container>
    </Box>

    <Box as="main" pt="5rem">
      {children}
    </Box>
  </Box>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
