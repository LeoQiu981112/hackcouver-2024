import React from "react";
import NavBarComponent from './NavBarComponent';
import { Box, Flex, Grid, Center, Text, Square, VStack, HStack, Divider, Image } from "@chakra-ui/react";
import ide_image from '../assets/ide.png';


const About: React.FC = () => (
    <>

        <Box position="absolute" top="10%" left="10%" right="0" bottom="0" zIndex="2">


            <NavBarComponent />
            <HStack spacing={2} position="absolute" left="100px" top="100px" zIndex={-1}>
                <Flex position="absolute" left="50px" top="50px" w="500px" h="500px" bgColor={"red.100"} bgImage={`url(${ide_image})`} // Corrected line
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                >
                    <VStack spacing={2} position="relative" padding="20px" >
                        <Text fontSize={25} fontWeight="bold">Welcome to Hackcouver</Text>
                        <Text noOfLines={6}>
                            _ where innovation meets community!
                            Our hackathon is a dynamic event
                            designed for tech enthusiasts to collaborate, create, and showcase
                            their projects in a fast-paced environment.
                        </Text>
                    </VStack>
                </Flex>

                <Square bg="white" size="500px" left="600px" top="100px" position="absolute" >
                    <VStack spacing={2} paddingY={4} position="absolute" bottom="5" padding="20px">
                        <Text fontSize={25} fontWeight="bold">What to expect?</Text>
                        <Text noOfLines={6}>
                            Networking: Connect with industry professionals and potential collaborators.
                            BUILD SOMETHING COOL
                            Prizes: Compete for exciting awards and gain recognition.
                            Fun Atmosphere: Enjoy tech talks, build relationships, and immerse yourself in Vancouver's tech community.
                            Join us at Hackover Vancouver for an unforgettable experience of innovation, learning, and camaraderie!
                        </Text>
                    </VStack>
                </Square>
            </HStack>
        </Box>
    </>
);

export default About;
