import { Center, Spinner } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const LoadMoreSpinner = ({ isSpinning }) => (
  <Center h="5rem">
    {isSpinning ? (
      <Spinner
        thickness="0.2rem"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.400"
        size="lg"
      />
    ) : null}
  </Center>
);

LoadMoreSpinner.defaultProps = {
  isSpinning: false,
};

LoadMoreSpinner.propTypes = {
  isSpinning: PropTypes.bool,
};

export default LoadMoreSpinner;
