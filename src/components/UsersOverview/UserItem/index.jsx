import { Box, Center, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useUserOverview from 'components/shared/UsersContextProvider/hooks/useUserOverview';

const UserItem = ({ username }) => {
  const userOverview = useUserOverview(username);

  return (
    <Link to={`/users/${userOverview.login}`}>
      <Box
        w="12rem"
        p="6"
        bg="gray.50"
        borderRadius="xl"
        boxShadow="md"
        transitionProperty="box-shadow"
        transitionDuration="0.2s"
        transitionTimingFunction="ease-in-out"
        _hover={{
          boxShadow: 'xl',
        }}
      >
        <Center>
          <Image
            src={userOverview.avatarUrl}
            alt={`${userOverview.avatarUrl} avatar`}
            mb="6"
            borderRadius="full"
            boxSize="8rem"
            objectFit="cover"
          />
        </Center>

        <Text
          isTruncated
          align="center"
          bgGradient="linear(to-r, cyan.300, purple.700)"
          bgClip="text"
          fontSize="lg"
          fontWeight="bold"
        >
          {userOverview.login}
        </Text>
      </Box>
    </Link>
  );
};

UserItem.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserItem;
