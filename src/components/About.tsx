import React from "react";
import NavBarComponent from './NavBarComponent';
import {
    Box,
    Flex,
    Text,
    Image,
    Heading
} from "@chakra-ui/react";
import ide_image from '../assets/ide.png';

const About: React.FC = () => (
    <>

        <Flex
            position="absolute"
            top="0"
            right="0"
            bottom="0"
            w="100vw"
            h="100vh"
            bgGradient="linear(to-t, #000000, #ffffff, #808080)"
            overflow={"hidden"}
            bgColor="gray.800"
            color="white"
        >

            <Box position="absolute" top="0" left="10%" right="0" bottom="0" zIndex="2">


                <NavBarComponent />
            </Box>
            <Box position="absolute" left="7%" top="15%" w="35%" h="45%" >
                <Image src={ide_image} />
                <Box position="absolute" top="15%" left="0" right="0" bottom="0" p="4" >
                    <Heading size='md' my='2' fontSize="25px" color="white" fontWeight="bold">
                        Welcome to Hackcouver
                    </Heading>
                    <Text fontSize="15px" color="white">
                        _ where innovation meets community! Our hackathon is a dynamic event designed for tech enthusiasts to collaborate, create, and showcase their projects in a fast-paced environment.
                    </Text>
                </Box>
            </Box>
            <Box position="absolute" right="25%" top="25%" w="30%" h="40%" >
                <Image src={ide_image} />
                <Box position="absolute" top="15%" left="0" right="0" bottom="0" p="4">
                    <Heading size='md' my='2' fontSize="25px" color="white" fontWeight="bold">
                        What to expect?
                    </Heading>
                    <Text fontSize="15px" color="white" noOfLines={6}>
                        Networking: Connect with industry professionals and potential collaborators. BUILD SOMETHING COOL Prizes: Compete for exciting awards and gain recognition. Fun Atmosphere: Enjoy tech talks, build relationships, and immerse yourself in Vancouver's tech community. Join us at Hackover Vancouver for an unforgettable experience of innovation, learning, and camaraderie!
                    </Text>
                </Box>
            </Box>


        </Flex>
    </>
);

export default About;
