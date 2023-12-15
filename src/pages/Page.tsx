
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
import Footer from '../components/Footer';
// Now you can use the imported components from the components folder
export default function Page() {

    return (
        <>
            <NavBar />

            <Flex id='Flex-Page' direction='column' align='center' justify='center'>

                <Home />

                <Box id='timeline' marginBottom='1rem'>
                    <TimeLine />
                </Box>

                <Box id='about-us' marginBottom='1rem'>
                    <About />
               
                </Box>

                <Box id='sponsors' marginBottom='1rem'>
                    <Sponsors />
                </Box>

                <Box id='panelists' marginBottom='1rem'>
                    <Panelists />
                </Box>

                <Box id='FAQs' marginBottom='1rem'>
                    <FAQ />
                </Box>

                <Box id='contact-us' marginBottom='1rem'>
                    <Contact />
                </Box>

                <Box>
                    <Footer />
                </Box>

            </Flex>



        </>
    )
}
