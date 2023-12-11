import { Flex, Box, Stack, Button, Center } from '@chakra-ui/react';
import MatrixRainingCode from './MatrixRainingEffect';
import Logo from './Logo'
import NavBar from './NavBar';


export default function Home() {


    return (

        <>
            <MatrixRainingCode className="absolute inset-0" style={{ zIndex: 1 }} />
            {/* Overlay content */}
            
            <Flex>
                <Flex position='absolute' top='0'>
                    <NavBar />
                </Flex>

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
            </Flex>
        </>
    )
    

}
