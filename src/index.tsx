import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Apps from './App'; // Import your updated AppRoutes component
import Page from './pages/Page';
import './index.css';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import FloatingCircles from './components/circle';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <FloatingCircles />
        <Page />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
);
