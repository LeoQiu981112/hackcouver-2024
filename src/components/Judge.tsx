import {
    Avatar, Box, Text, VStack,
    Flex, Circle
} from "@chakra-ui/react";


import React from "react";

interface JudgeProps {
    name: string;
    src: string;
    title: string | JSX.Element;
}

const Judge: React.FC<JudgeProps> = ({ name, src, title }) =>
    <Flex align="center" p={2} borderRadius="lg">
        <Avatar
            src={src}
            size="xl"
            mr={3} // Adds margin to the right of the Avatar
            bgGradient="linear(to-l, #FFD8EA, #D9D9D9, #DAB2DB)"
            border="5px solid transparent"
        />
        <Box>
            <Text fontWeight="bold" color="#FFD8EA">{name}</Text>
            <Text fontSize="sm" color="#FFD8EA">{title}</Text>
        </Box>
    </Flex>

export default Judge;