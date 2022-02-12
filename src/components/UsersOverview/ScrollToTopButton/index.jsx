import { Box, Fade, Text } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const throttled = throttle(() => {
      const { clientHeight, scrollTop } = document.documentElement;
      const isScrollToTopArea = clientHeight * 3 < scrollTop;

      if (!isDisplayed && isScrollToTopArea) {
        setIsDisplayed(true);
      }

      if (isDisplayed && !isScrollToTopArea) {
        setIsDisplayed(false);
      }
    }, 300);

    window.addEventListener('scroll', throttled);

    return () => {
      throttled.cancel();
      window.removeEventListener('scroll', throttled);
    };
  }, [isDisplayed, setIsDisplayed]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Fade in={isDisplayed}>
      <Box
        as="button"
        position="fixed"
        bottom="4"
        right="4"
        width="4rem"
        height="4rem"
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.3)' }}
        onClick={handleClick}
      >
        <Text
          bgGradient="linear(to-r, cyan.300, purple.700)"
          bgClip="text"
          fontSize="5xl"
        >
          &#8593;
        </Text>
      </Box>
    </Fade>
  );
};

export default ScrollToTopButton;
