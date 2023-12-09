import React from 'react';
import { Flex, Box, Text, Container, Image, Stack, Button, Center } from '@chakra-ui/react';
import MatrixRainingCode from './MatrixRainingEffect';
import NavBarComponent from './NavBarComponent';
import Logo from './Logo'

import v_logo from '../assets/v_logo.png';


// 2880x1620

const Home: React.FC = () => (
    <>

        <MatrixRainingCode className="absolute inset-0" style={{ zIndex: 1 }} />
        {/* Overlay content */}
        <Box position="absolute" top="0" left="10%" right="0" bottom="0" zIndex="2">
            <NavBarComponent />

            {/* Additional content */}
            <Stack direction={"column"} position="absolute" top="25%" left="30%" gap={10}>
                <Logo />
                <Center>
                    <Button width={"100px"} height={"50px"} color='black' bgColor={"gray.200"} variant='ghost' opacity={0.8} borderColor='red.900' borderRadius={'xl'}
                        _hover={{
                            bg: 'white',
                            borderColor: 'black',
                        }} // Changes the background to blue when hovered

                    >
                        Apply
                    </Button>
                </Center>
            </Stack>
            <Box position="absolute" bottom="10%">
                {/* Your additional boxes here */}
            </Box>
        </Box>
    </>
);

export default Home;