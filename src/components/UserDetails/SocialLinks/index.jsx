import { HStack, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import GitHubIcon from 'components/shared/icons/GitHubIcon';
import TwitterIcon from 'components/shared/icons/TwitterIcon';
import { convertToUrlWithScheme } from 'utils/urls';

const SocialLinks = ({ user }) => (
  <HStack wrap="wrap" justify="center" spacing="1rem" px="6">
    <Link isExternal href={`https://github.com/${user.login}`} display="flex">
      <GitHubIcon />
    </Link>

    <Link
      isExternal
      href={`https://twitter.com/${user.twitter}`}
      display="flex"
    >
      <TwitterIcon />
    </Link>

    <Link
      isExternal
      href={convertToUrlWithScheme(user.blog)}
      fontWeight="semibold"
    >
      {user.blog}
    </Link>
  </HStack>
);

SocialLinks.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    twitter: PropTypes.string,
    blog: PropTypes.string,
  }).isRequired,
};

export default SocialLinks;
