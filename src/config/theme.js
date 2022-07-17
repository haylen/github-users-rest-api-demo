import { mode } from '@chakra-ui/theme-tools';

const theme = {
  styles: {
    global: (props) => ({
      body: {
        minHeight: '100vh',
        background: mode('gray.100', 'gray.800')(props),
      },
    }),
  },
};

export default theme;
