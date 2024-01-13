import {
    Box,
    Flex,
    Text,
    Image,
    Heading,
} from "@chakra-ui/react";
import ide_image from '../assets/ide.png';
import teamwork from '../assets/teamwork.png';

export default function About() {

    return (

        <Flex id="About-flex" direction='column' align='center' justify='center' marginTop={-20}>
            <Flex id="Welcome-flex" direction='row' align='center' justify='center' marginX='1rem' gap='10' margin='2rem' wrap='wrap'>
                <Heading as='h1' size='2xl' margin='2rem'>Welcome to Hackcouver!</Heading>
                <Flex direction='row' pl="10" width='75vw' align='center'>
                    <Box width='40%' padding='2'>
                        <Image src={teamwork} width='100%' height='auto' /> {/* Set height to auto to maintain aspect ratio */}
                    </Box>
                    <Box width='45%' pl={4}> {/* Added left padding for gap */}
                        <Heading size='md' fontSize="30px" color="white" fontWeight="bold">
                            Level up your tech journey
                        </Heading>
                        <Heading size='md' fontSize="30px" color="white" fontWeight="bold" mt={2}> {/* Added top margin for gap */}
                            with Hackcouver!
                        </Heading>
                        <Text fontSize="15px" fontWeight="bold" color="white" mt={5}> {/* Added top margin for gap */}
                            &gt; where innovation meets community! Our hackathon is a dynamic event designed for tech enthusiasts to collaborate, create, and showcase their projects in a fast-paced environment.
                        </Text>

                    </Box>

                </Flex>

            </Flex>

            <Heading as='h1' size='2xl' paddingTop={40} margin='2rem'>What you will gain!</Heading>
            <Image src={ide_image} />


        </Flex >
    )
}

