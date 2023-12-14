import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ 
    config,
    styles: {
      global: {
        body: {
          bg: 'black',
          color: 'white',
          fontFamily: "'VT323', monospace", // Set VT323 as the default font
        },
      },
    },
    fonts: {
      heading: "'VT323', monospace", // Optional: Set VT323 for headings
      body: "'VT323', monospace",    // Optional: Set VT323 for body text
    },
});

export default theme;
