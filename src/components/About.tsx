import {
    Box,
    Flex,
    Text,
    Image,
    Heading,
} from "@chakra-ui/react";
import ide_image from '../assets/ide.png';


export default function About() {

    return (

        <>
            <Flex id="About-flex" direction='column' align='center' justify='center'>
                <Heading as='h1' size='2xl' margin='2rem'>About Us</Heading>
                    <Flex direction='row' align='center' justify='center' marginX='1rem' gap='10' margin='2rem' wrap='wrap'>

                        <Box position="relative" width='400px'>
                            <Image src={ide_image} />
                            <Box position="absolute" top="13%" left="4" right="4">
                                <Heading position="relative" size='md' my='2' fontSize="25px" color="white" fontWeight="bold">
                                    Welcome to Hackcouver
                                </Heading>
                                <Text fontSize="15px" color="white">
                                    _ where innovation meets community! Our hackathon is a dynamic event designed for tech enthusiasts to collaborate, create, and showcase their projects in a fast-paced environment.
                                </Text>
                            </Box>
                        </Box>

                        <Box position="relative" top="10" width="400px">
                            <Image src={ide_image} />
                            <Box position="absolute" top="13%" left="4" right="4">
                                <Heading position="relative" size='md' my='2' fontSize="25px" color="white" fontWeight="bold">
                                    What to expect?
                                </Heading>
                                <Text fontSize="15px" color="white">
                                    Networking: Connect with industry professionals and potential collaborators. BUILD SOMETHING COOL Prizes: Compete for exciting awards and gain recognition. Fun Atmosphere: Enjoy tech talks, build relationships, and immerse yourself in Vancouver's tech community. Join us at Hackover Vancouver for an unforgettable experience of innovation, learning, and camaraderie!
                                </Text>
                            </Box>
                        </Box>

                    </Flex>
            </Flex>
        </>
    )
}

