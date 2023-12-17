import TimelineComponent from "./TimeLineComponent";

import {

    Heading,
    Flex,
} from "@chakra-ui/react";


export default function Timeline() {
    return (
        <>
            <Flex direction="column"
                p={100} m={70}
                align="center"
            >

                <Heading as='h1' fontSize='75px' margin='2rem'>Timeline</Heading>
                <TimelineComponent />

            </Flex>
        </>
    )

}


