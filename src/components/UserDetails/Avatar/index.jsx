import { Center, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Avatar = ({ avatarUrl }) => (
  <Center px="2">
    <Image
      src={avatarUrl}
      alt={`${avatarUrl} avatar`}
      borderRadius="full"
      boxSize="xs"
      objectFit="cover"
    />
  </Center>
);

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
};

export default Avatar;
