import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import NavBar from "./NavBar";

export default function Sponsors() {

    return (
        <>
        <NavBar />

        <Flex
            direction='column'
            align='center'
            justify='center'
            marginX='1rem'
        >
            <Heading as='h1' size='2xl' marginTop='1rem' marginBottom='4rem'>Sponsors</Heading>
            <Heading as='h2' size='lg'>Sponsor 1</Heading>
            <Heading as='h2' size='lg'>Sponsor 2</Heading>
            <Heading as='h2' size='lg'>Sponsor 3</Heading>

        </Flex>


        </>
    )

}