import { Box, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MISSING_VALUE = 'Not Provided';

const DetailsListItem = ({ label, value }) => (
  <Box py="2" px="6">
    <Text
      bgGradient="linear(to-r, cyan.300, purple.700)"
      bgClip="text"
      fontSize="sm"
      fontWeight="medium"
      mb="1"
    >
      {label}
    </Text>

    {value ? (
      <Text fontSize="xl" fontWeight="medium">
        {value}
      </Text>
    ) : (
      <Text color="gray.300" fontSize="md" fontWeight="medium">
        {MISSING_VALUE}
      </Text>
    )}
  </Box>
);

DetailsListItem.defaultProps = {
  value: null,
};

DetailsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DetailsListItem;
