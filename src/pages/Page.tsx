
import * as React from 'react';
import {
    Flex,
    Box,
} from "@chakra-ui/react"

import Home from "../components/Home";
import TimeLine from "../components/TimeLine";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Panelists from "../components/Panelists";
import Contact from "../components/Contact";
import FAQ from '../components/FAQ';
import NavBar from '../components/NavBar';
// Now you can use the imported components from the components folder
export default function Page() {

    return (
        <>
            <NavBar />

            <Flex direction='column' align='center' justify='center'>
                <Home />

                <Box marginBottom='1rem'>
                    <TimeLine />
                </Box>

                <Box marginBottom='1rem'>
                    <About />
                </Box>

                <Box marginBottom='1rem'>
                    <Sponsors />
                </Box>

                <Box marginBottom='1rem'>
                    <Panelists />
                </Box>

                <Box marginBottom='1rem'>
                    <FAQ />
                </Box>

                <Box marginBottom='1rem'>
                    <Contact />
                </Box>

            </Flex>



        </>
    )
};
