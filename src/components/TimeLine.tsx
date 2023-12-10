import React from "react";
import NavBarComponent from './NavBarComponent';
import TimelineComponent from "./TimeLineComponent";
import {
    Box,
    Flex,
    Text,
    Image,
    Heading
} from "@chakra-ui/react";

const TimeLine: React.FC = () => (
    <>
        <Flex
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            w="100vw"
            h="100vh"
            overflow={"hidden"}
            bgColor="black"
            color="white"
        >
            <Box position="absolute" top="0" left="10%" right="0" bottom="0" zIndex="2">
                <NavBarComponent />
                <Box position="absolute" top="20%" zIndex="2">
                    <Heading size='md' fontSize="50px" color="white" fontWeight="bold" marginBottom={10}>
                        Timeline
                    </Heading>
                    <TimelineComponent />
                </Box>
            </Box>

        </Flex>
    </>
);

export default TimeLine;
