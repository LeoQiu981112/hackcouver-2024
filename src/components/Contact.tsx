import React from "react";
import MenuComponent from './MenuComponent';
import NavBarComponent from './NavBarComponent';
import { Box, Flex, Container } from "@chakra-ui/react";

const Contact: React.FC = () => (
    <>
        <Box position="absolute" top="0" left="0" bg="blue.600">
            <h1>Contact4</h1>
        </Box>
        {/* navbar should be centered */}
        <Box position="absolute" top="0" left="30%">
            <NavBarComponent />
        </Box>

        <Box position="absolute" top="0" right="0">
            <MenuComponent />
        </Box>
    </>
);

export default Contact;
