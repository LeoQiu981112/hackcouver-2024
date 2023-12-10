import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Apps from './App'; // Import your updated AppRoutes component
import './index.css';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <Apps />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
);
