import {
    Avatar, Box, Text,
    Flex
} from "@chakra-ui/react";


import React from "react";

interface JudgeProps {
    name: string;
    src: string;
    title: string | JSX.Element;
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; // Add avatarSize prop for responsiveness
}

const Judge: React.FC<JudgeProps> = ({ name, src, title, size }) =>
    <Flex id="Judge" align="center" p={2} borderRadius="lg" >
        <Avatar
            src={src}
            size={size}
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