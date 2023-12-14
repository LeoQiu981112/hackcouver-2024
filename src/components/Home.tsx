import {
    Box, Grid, GridItem, Stack, Heading, Flex, Link, Center,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from "@chakra-ui/react"
import NavBar from "./NavBar"
import Logo from "./Logo"
import CountdownTimer from "./CountdownTimer";

import MatrixRainingCode from "./MatrixRainingEffect";
import { Text } from '@chakra-ui/react';
const targetDate = '2024-03-24';
const Home = () => {
    return (
        <>
            <Flex direction="column" pl={70} pr={70} mb={70}>
                <MatrixRainingCode />
                <Center><Logo /></Center>

                <TableContainer >
                    <Table variant='Simple' color={"white"}>
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

                <Stack direction={"column"} gap={10} color={"white"}>

                    <Heading mb={"auto"} fontSize={40}>Event starts in:</Heading>

                    <Flex gap={4} direction={"row"} alignContent={"center"}>

                        <CountdownTimer targetDate={targetDate} />
                        <Link bgGradient='linear(to-l, #7928CA, #FF0080)' variant='ghost' fontSize={45} bgClip='text'>Join Now</Link>
                    </Flex>
                </Stack>
            </Flex>

        </>
    );
};

export default Home;