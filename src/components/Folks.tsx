import React from "react";
import MenuComponent from './MenuComponent';
import NavBarComponent from './NavBarComponent';
import { Box, Flex } from "@chakra-ui/react";

const Folks: React.FC = () => (
    <Flex position="relative" w="100vw" h="100vh">
        <Box position="absolute" top="0" left="0">
            <h1>Folks6</h1>
        </Box>
        {/* navbar should be centered */}
        <Box position="absolute" top="0" left="30%">
            <NavBarComponent />
        </Box>

        <Box position="absolute" top="0" right="0">
            <MenuComponent />
        </Box>
    </Flex>
);

export default Folks;
