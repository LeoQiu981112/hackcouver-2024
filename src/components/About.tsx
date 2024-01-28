import {
    Box,
    Flex,
    Text,
    Image,
    Heading,
    useBreakpointValue
} from "@chakra-ui/react";
import ide_image from '../assets/terminal.png';
import teamwork from '../assets/teamwork.png';

export default function About() {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const flexDirection = isMobile ? 'column' : 'row';
    const textFontSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

    return (
        <Flex direction='column' align='center' justify='center' mt={isMobile ? 0 : -20} >
            <Flex direction={flexDirection} align='center' justify='center' mx={isMobile ? 0 : '1rem'} my='2rem' gap='10' wrap='wrap'>
                <Heading as='h1' size='2xl' my='2rem' textAlign='center'>Welcome to Hackcouver!</Heading>
                <Flex direction={flexDirection} width={isMobile ? '100%' : '75vw'} align='center' justify='center'>
                    <Box width={isMobile ? '100%' : '60%'} p='2'>
                        <Image src={teamwork} width='100%' height='auto' />
                    </Box>
                    <Box width={isMobile ? '100%' : '45%'} pl={isMobile ? 0 : 4} textAlign={isMobile ? 'center' : 'left'}>
                        <Heading size='md' fontSize="30px" color="white" fontWeight="bold">
                            Level up your tech journey
                        </Heading>
                        <Heading size='md' fontSize="30px" color="white" fontWeight="bold" mt={2}>
                            with Hackcouver!
                        </Heading>
                        <Text fontSize={textFontSize} fontWeight="bold" color="white" mt={5}>
                            &gt; where innovation meets community! Our hackathon is a dynamic event designed for tech enthusiasts to collaborate, create, and showcase their projects in a fast-paced environment.
                        </Text>
                    </Box>

                </Flex>
            </Flex>
            <Heading as='h1' size='2xl' my='2rem' textAlign='center'>What you will gain!</Heading>
            <Image
                src={ide_image}
            />
        </Flex>
    );
}

