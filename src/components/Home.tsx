import { Flex, Box, Stack, Button, Center, Heading, Text, Divider, Link } from '@chakra-ui/react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Grid,
    GridItem
} from "@chakra-ui/react"
import MatrixRainingCode from './MatrixRainingEffect';
import Logo from './Logo'
import NavBar from './NavBar';
import CountdownTimer from './CountdownTimer';


export default function Home() {
    const targetDate = '2024-03-01';
    return (
        <Box position='relative' width='100vw' height='100vh'>
            <MatrixRainingCode style={{ zIndex: 1 }} />

            <Grid
                position='absolute'
                top={0}
                left={0}
                templateAreas={{
                    base: `"header"
                           "nav"
                           "main"
                           "footer"`,
                    md: `"header header"
                         "nav main"
                         "nav footer"`
                }}
                gridTemplateRows={{ base: '40px 1fr 2fr 40px', md: '50px 1fr 30px' }}
                gridTemplateColumns={{ base: '1fr', md: '150px 1fr' }}
                height='100%'
                width='100%'
                gap={1}
                color='blackAlpha.700'
                fontWeight='bold'
                bg='transparent'
            >
                <GridItem pl='2' area={'header'}>
                    <NavBar />
                </GridItem>
                <GridItem pl='2' area={'nav'}>
                    Nav
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    main
                    <Stack direction={"column"} gap={10}>
                        <Center>

                            <Stack direction={"column"} gap={10}>
                                <Logo />
                                <TableContainer >
                                    <Table variant='unstyled' color={"white"}>
                                        <Thead>
                                            <Tr>
                                                <Th fontSize={40}>Date</Th>
                                                <Th fontSize={40}>Location</Th>
                                                <Th fontSize={40}> Time </Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td fontSize={20}> 24 Mar 01 - 24 Mar 14</Td>
                                                <Td fontSize={20}>SEND ME LOCATION</Td>
                                                <Td fontSize={20}>5pm PST</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>

                            </Stack>
                        </Center>

                        <Stack direction={"column"} gap={10} color={"white"}>

                            <Heading mb={"auto"} fontSize={50}>Event starts in:</Heading>

                            <Flex gap={4} direction={"row"} alignContent={"center"}>

                                <CountdownTimer targetDate={targetDate} />
                                <Divider orientation='vertical' color={'white'} w={"2px"} h={"100px"} />
                                <Link width={"200px"} height={"300px"} color='gray' variant='ghost' fontSize={45}>Join Now</Link>
                            </Flex>
                        </Stack>

                    </Stack>
                    <Box position="absolute" bottom="10%">
                        {/* Your additional boxes here */}
                    </Box>
                </GridItem>
                <GridItem pl='2' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>


        </Box >
    )


}
