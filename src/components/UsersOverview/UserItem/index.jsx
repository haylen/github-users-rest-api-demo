import { Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useUserOverview from 'components/UsersContextProvider/hooks/useUserOverview';

const UserItem = ({ username }) => {
  const userOverview = useUserOverview(username);

  return (
    <Link to={`/users/${userOverview.login}`}>
      <Image
        src={userOverview.avatarUrl}
        alt={`${userOverview.avatarUrl} avatar`}
        boxSize="250px"
        objectFit="cover"
      />

      <Text fontSize="2xl">{userOverview.login}</Text>
    </Link>
  );
};

UserItem.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserItem;
