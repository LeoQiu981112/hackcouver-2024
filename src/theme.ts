import { Button, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: '#2F2440',
        color: '#FFCBA4',
        fontFamily: "'Play', monospace", // Set VT323 as the default font
      },
    },
  },
  fonts: {
    heading: "'Play', monospace", // Optional: Set VT323 for headings
    body: "'Play', monospace",    // Optional: Set VT323 for body text
  },

});

export default theme;
