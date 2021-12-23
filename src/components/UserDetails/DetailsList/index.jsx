import { Box, Divider } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import DetailsListItem from 'components/UserDetails/DetailsListItem';
import { formatedTimestamp } from 'utils/dates';

const DetailsList = ({ user }) => (
  <Box>
    <DetailsListItem label="Username" value={user.login} />
    <Divider />
    <DetailsListItem label="Full Name" value={user.name} />
    <Divider />
    <DetailsListItem label="Bio" value={user.bio} />
    <Divider />
    <DetailsListItem label="Followers #" value={user.followers} />
    <Divider />
    <DetailsListItem label="Public Repos #" value={user.publicRepos} />
    <Divider />
    <DetailsListItem
      label="On GitHub since"
      value={formatedTimestamp(user.createdAt)}
    />
  </Box>
);

DetailsList.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    bio: PropTypes.string,
    followers: PropTypes.number,
    publicRepos: PropTypes.number,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default DetailsList;
