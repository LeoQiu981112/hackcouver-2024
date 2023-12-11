import NavBar from './NavBar';
import TimelineComponent from "./TimeLineComponent";

import {
    Flex,
    Heading,
} from "@chakra-ui/react";


export default function Timeline() {
    return (
        <>
        <NavBar />
        <Flex direction="column" align="center" >

            <Heading as='h1' size='2xl' margin='2rem'>Timeline</Heading>
           
            <TimelineComponent />

        </Flex>
        </>
    )

}


