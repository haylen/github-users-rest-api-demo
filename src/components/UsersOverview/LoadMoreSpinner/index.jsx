import { Center, Spinner, useColorModeValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const LoadMoreSpinner = ({ isSpinning }) => {
  const color = useColorModeValue('gray.400', 'gray.900');
  const emptyColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Center h="5rem">
      {isSpinning ? (
        <Spinner
          thickness="0.2rem"
          speed="0.65s"
          color={color}
          emptyColor={emptyColor}
          size="lg"
        />
      ) : null}
    </Center>
  );
};

LoadMoreSpinner.defaultProps = {
  isSpinning: false,
};

LoadMoreSpinner.propTypes = {
  isSpinning: PropTypes.bool,
};

export default LoadMoreSpinner;
