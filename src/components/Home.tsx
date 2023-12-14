import {
    Box, Grid, GridItem, Stack, Heading, Flex, Link,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from "@chakra-ui/react"
import NavBar from "./NavBar"
import Logo from "./Logo"
import CountdownTimer from "./CountdownTimer";

import MatrixRainingCode from "./MatrixRainingEffect";
const targetDate = '2024-03-24';
const Home = () => {
    return (
        <>
            <MatrixRainingCode />
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
                gap={1}
                color='blackAlpha.700'
                fontWeight='bold'
                width='100%'
                textAlign={"center"}

            >
                <GridItem pl='2' area={'header'}>
                    <NavBar />
                </GridItem>
                <GridItem pl='2' area={'nav'}>
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    <Stack direction={"column"} gap={10}>

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

                        <Stack direction={"column"} gap={10} color={"white"}>

                            <Heading mb={"auto"} fontSize={50}>Event starts in:</Heading>

                            <Flex gap={4} direction={"row"} alignContent={"center"}>

                                <CountdownTimer targetDate={targetDate} />
                                <Link bgGradient='linear(to-l, #7928CA, #FF0080)' variant='ghost' fontSize={45} bgClip='text'>Join Now</Link>
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
        </>
    );
};

export default Home;