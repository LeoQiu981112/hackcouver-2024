import {
    Box, Heading, Flex, Link,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from "@chakra-ui/react"
import Logo from "./Logo"
import CountdownTimer from "./CountdownTimer";
import city from "../assets/city.webp"

import MatrixRainingCode from "./MatrixRainingEffect";
const targetDate = '2024-03-24';
const Home = () => {

    return (
        <>
            <Box id="homebox" w="100vw" h="100vh" background={`url(${city})`} backgroundSize="cover" backgroundPosition="center" opacity={0.90} />
            <MatrixRainingCode />
            <Flex direction="column" position="absolute" top={0} pt={100} mb={70}  >
                <Logo />
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
                                <Td fontSize={20}> 24 Mar 01</Td>
                                <Td fontSize={20}>REMOTE</Td>
                                <Td fontSize={20}>5pm PST</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex direction="column" justify="center" align="center" >
                    <Heading fontSize={40}>Event starts in:</Heading>
                    <CountdownTimer targetDate={targetDate} />
                    <Link
                        bgGradient='linear(to-l, #7928CA, #FF0080)'
                        variant='ghost'
                        fontSize={70}
                        fontWeight='extrabold'
                        bgClip='text'
                        css={{
                            animation: 'breathing 2s ease-in-out infinite',
                            '@keyframes breathing': {
                                '0%, 100%': {
                                    fontSize: '70px',
                                },
                                '50%': {
                                    fontSize: '75px', // Increased for more noticeable breathing effect
                                },
                            },
                            transition: 'background-color 0.3s, font-size 0.3s',
                            '&:hover': {
                                fontSize: '85px', // Increased size on hover
                                backgroundColor: '#f0f0f0',
                                color: 'white',
                                textDecoration: 'none', // Remove underline on hover
                            },
                        }}
                    >
                        Join Now
                    </Link>

                </Flex>
            </Flex>
        </>
    );
};

export default Home;