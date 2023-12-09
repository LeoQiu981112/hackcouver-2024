import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Apps from './App'; // Import your updated AppRoutes component
import './index.css';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <Apps />
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
);
