
import {
    Flex,
    Box,
} from "@chakra-ui/react"


import Home from "../components/Home";
// import TimeLine from "../components/TimeLine";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import Panelists from "../components/Panelists";
import JudgeMentor from "../components/JudgeMentor";
import Contact from "../components/ContactUs";
import FAQ from '../components/FAQ';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
// Now you can use the imported components from the components folder
export default function Page() {

    return (
        <>

            <Flex id='Flex-Page' direction='column' zIndex={0} >
                <NavBar />

                <Box id='home' >
                    <Home />
                </Box>

                <Box id='about-us' marginBottom='10rem'>
                    <About />
                </Box>

                {/* <Box id='timeline' marginBottom='1rem'>
                    <TimeLine />
                </Box> */}

                <Box id='panelists' marginBottom='15rem'>
                    <Panelists />
                </Box>

                <Box id='judgement' marginBottom='1rem'>
                    <JudgeMentor />
                </Box>

                <Box id='sponsors' marginBottom='1rem'>
                    <Sponsors />
                </Box>

                <Box id='FAQs' marginBottom='1rem'>
                    <FAQ />
                </Box>

                <Box id='contact-us' marginBottom='1rem'>
                    <Contact />
                </Box>
                <Box bg={'#B94949'}>
                    <Footer />
                </Box>

            </Flex>



        </>
    )
}
