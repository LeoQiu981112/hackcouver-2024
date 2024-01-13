import { useBreakpointValue } from '@chakra-ui/react'
import {
    Box, Flex, Text,
} from "@chakra-ui/react"
import Logo from "./Logo"
import city from "../assets/city.png"
import CustomButton from "./CustomButton";

const Home = () => {

    const LogoTextSize = useBreakpointValue(
        {
          base: '4rem',
          md: '8rem',
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
                w="100%" h="130vh"
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
                gap={20}
                m={5}
                pt={80}>
                
                <Box>
                    <Logo fontSize={LogoTextSize}/>
                </Box>

                {/* Home Page Info */}
                <Flex
                    id="Home-Info-Flex"
                    direction={{base: "column", md: "row"}}
                    align={'center'}
                    gap={{base:2, md: 150}}
                    mb={10}
                    >
                    <Text fontSize={{base: '32px', md: '2rem'}} fontWeight="bold">Vancouver Convention Center</Text>
                    <Text fontSize={{base: '24px', md: '2rem'}} fontWeight="bold">March 01 - March 14</Text>                
                </Flex>

                {/* Home Page Button */}
                <Box>
                    <CustomButton text="REGISTER NOW" />
                </Box>
            </Flex>
        </Flex>





        </>
    );
};

export default Home;