import { Box, useColorMode } from '@chakra-ui/react';

import MoonIcon from 'components/shared/icons/MoonIcon';
import SunIcon from 'components/shared/icons/SunIcon';

const MAP_ICON_TO_COLOR_MODE = {
  light: MoonIcon,
  dark: SunIcon,
};

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const Icon = MAP_ICON_TO_COLOR_MODE[colorMode];

  return (
    <Box cursor="pointer" userSelect="none" onClick={toggleColorMode}>
      <Icon />
    </Box>
  );
};

export default ColorModeToggle;
