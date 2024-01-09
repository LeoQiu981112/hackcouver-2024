import TimelineComponent from "./TimeLineComponent";

import {

    Heading,
    Flex,
    Box,
    Image, Text
} from "@chakra-ui/react";
import monkey from "../assets/monkey.png";
import team from "../assets/team.png";


export default function Timeline() {
    return (
        <>
            {/* add background using underground.png */}

            <Flex direction="column"
                p={100} m={70}


            >

                <Heading as='h1' align="center" fontSize='75px' margin='2rem'>Timeline</Heading>
                <TimelineComponent />
                <Image src={team} w="100%" />

            </Flex>
        </>
    )

}


