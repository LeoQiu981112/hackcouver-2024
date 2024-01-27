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
import { navLinks } from "./informationLists";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Footer() {

    const BreakPoint = useBreakpointValue(
        {
          base: 'base',
          md: '48rem',
        },
    )

    return (
        <>
            <Grid
                mt='2rem'
                id='Footer-grid'
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                width='full'>


                {/* Navigation Links */}
                <Flex
                    justify='center'
                    align='center'
                    m={8}
                    zIndex={10}
                    >

                    <Flex
                        id="Footer-logo-flex"
                        direction="column"
                        align={(BreakPoint=='base')? 'center':'left'}>
                            
                        {/* Hackathon Logo */}    
                        <Link _hover={{ color: 'red', transform: ['scale(1.1)', 'translateX(-10px)'], transition: 'transform .2s ease-in-out' }} href='#'>
                            <Logo textColor={'black'} fontSize={"30px"} marginBottom={'0'} />
                        </Link>
                        <br></br>

                        {/* Footer Navigation Links */}
                        {navLinks.map((component, index) => (
                            <Link   
                                key = {index}
                                _hover={{ color: 'red', transform: 'translateX(5px)' }} 
                                my={(BreakPoint=='base')? '10px':'2px'}
                                href={component.path}>
                                {component.name}
                                </Link>

                        ))}
                    </Flex>
                </Flex>

                <Flex>
                    {/* Empty Box Divider Hack Job */}
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