import {
    Box, Flex, Text,
} from "@chakra-ui/react"
import Logo from "./Logo"
import city from "../assets/city.png"
import CustomButton from "./CustomButton";
import { useBreakpointValue } from '@chakra-ui/react'


const Home = () => {

    const LogoTextSize = useBreakpointValue(
        {
            base: '3rem',
            md: '8rem',
        },
    )

    const HomeBreakPoint = useBreakpointValue(
        {
          base: 'base',
          md: '48rem',
        },
    )

    return (
        <>

            <Flex
                id="Home-Page-Flex"
                justify={"center"}
            >
                {/* Home Page Background */}
                <Box
                    w="100%" h="100vh"
                    position="relative"
                    background={`url(${city})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    opacity={0.20}
                    overflow="hidden">
                </Box>

                {/* Home Page Logo */}
                <Flex
                    id="Home-Text-Flex"
                    position={"absolute"}
                    direction={"column"}
                    textAlign={'center'}
                    gap={{ base: '10', md: '20' }}
                    px={10}
                    pt={{ base: '12rem', md: '24rem' }}>

                    <Box>
                        <Logo fontSize={LogoTextSize} />
                    </Box>

                    {/* Home Page Info */}
                    <Flex
                        id="Home-Info-Flex"
                        direction={{ base: "column", md: "row" }}
                        align={'center'}
                        gap={{ base: 1, md: 200 }}
                    >
                        <Text fontSize={{ base: '1.3rem', md: '2rem' }} fontWeight="bold">Vancouver Convention Center</Text>
                        <Text fontSize={{ base: '1rem', md: '2rem' }} fontWeight="bold">24 Mar 01 - 24 Mar 14</Text>
                    </Flex>

                    {/* Home Page Button */}
                    <Box mt={10}>
                        {(HomeBreakPoint=="base") ? 
                        <CustomButton text="Register Now" url={'https://tally.so/r/wbdOL7'} width='150px' height='40px' fontSize='16' />
                        : 
                        <CustomButton text="Register Now" url={'https://tally.so/r/wbdOL7'} />} 
                    </Box>
                </Flex>
            </Flex>





        </>
    );
};

export default Home;
