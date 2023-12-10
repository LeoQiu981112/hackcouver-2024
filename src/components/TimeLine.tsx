import React from "react";
import NavBarComponent from './NavBarComponent';
import TimelineComponent from "./TimeLineComponent";
import RotatingSquare from "./rotating_square";
import {
    Box,
    Flex,
    Text,
    Image,
    Heading
} from "@chakra-ui/react";


const TimeLine: React.FC = () => (
    <Flex direction="column" align="left" >
        <NavBarComponent />
        <Heading size='md' fontSize="50px" color="white" fontWeight="bold" marginBottom={10}>
            Timeline
        </Heading>
        <TimelineComponent />
    </Flex>
);


export default TimeLine;
