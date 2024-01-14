import {
    Box,
    Flex,
    Grid,

} from "@chakra-ui/react";

import {
    Text,
    Image,
    Link
} from "@chakra-ui/react";


import Logo from "./Logo";
import instagram from "../assets/instagram_logo.png";
import linkendin from "../assets/linkendin_logo.png";


export default function Footer() {
    return (
        <>
            <Grid
                id='Footer-grid'
                gap={{base: 2, md: ''}}
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                width='full'>


                {/* Navigation Links */}
                <Flex
                    justify='center'
                    align='center'
                    m={8}>

                    <Flex
                        id="Footer-logo-flex"
                        direction="column"
                        align='left'>
                        <Link _hover={{ transform: ['scale(1.1)', 'translateX(-10px)'], transition: 'transform .2s ease-in-out' }} href='#'>
                            <Logo textColor={'black'} fontSize={"30px"} marginBottom={'0'} />
                        </Link>
                        <br></br>


                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#about-us'>About Us</Link>
                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#panelists'>Panelists</Link>
                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#judgement'>Judge & Mentor</Link>
                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#sponsors'>Sponsors</Link>
                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#FAQs'>FAQs</Link>
                        <Link _hover={{ color: 'red', transform: 'translateX(5px)' }} href='#contact-us'>Contact Us</Link>
                        
                    </Flex>
                </Flex>

                <Flex>

                </Flex>



                {/* Social Media Links  */}
                <Flex
                    id="Footer-social-media-flex"
                    direction='row'
                    justify='center'
                    m={8}
                    gap={8}>
                    <Box>
                        <Link href="https://www.instagram.com" isExternal>
                            <Image
                                boxSize='50px'
                                objectFit='cover'
                                src={instagram}
                                alt='instagram logo'
                                _hover={{ transform: 'scale(1.1)', transition: 'transform .2s ease-in-out' }}
                                fallbackSrc='https://via.placeholder.com/50'
                                />
                        </Link>
                    </Box>
                    
                    <Box>
                        <Link href="https://www.linkendin.com" isExternal>
                            <Image
                                boxSize='50px'
                                objectFit='cover'
                                src={linkendin}
                                alt='linkendin logo'
                                _hover={{ transform: 'scale(1.1)', transition: 'transform .2s ease-in-out' }}
                                fallbackSrc='https://via.placeholder.com/50'
                                />
                        </Link>
                    </Box>
                </Flex>


            </Grid>

            {/* Copyright */}
            <Flex direction='column' fontSize='lg' align='center' justify='center' h='150px'>
                <Text>Organized by Vancouver.dev</Text>
                <Text>&copy; Vancouver.dev 2024</Text>
            </Flex>


        </>
    )
}