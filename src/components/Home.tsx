import {
    Box, Heading, Flex, Link, Text, Button
} from "@chakra-ui/react"
import Logo from "./Logo"
import city from "../assets/city.png"

const Home = () => {

    return (
        <>
            <Box id="homebox" w="100vw" h="140vh"
                background={`url(${city})`}
                backgroundSize="cover" backgroundPosition="center" opacity={0.20} />
            <Flex direction="column" position="absolute" top={40} pt={100} mb={70} gap={20} align="center">
                <Logo />
                <Flex direction="row" gap={100}>
                    <Text fontSize="35" fontWeight="bold">Vancouver Convention Center</Text>
                    <Text fontSize="35" fontWeight="bold">24 Mar 01 - 24 Mar 14</Text>
                </Flex>
                <Button
                    color="#FFCBA4"
                    colorScheme='red'
                    fontSize="25"
                    w="250px"
                    h="50px"
                    outlineColor={"white"}
                    css={{
                        animation: 'breathing 2s ease-in-out infinite',
                        '@keyframes breathing': {
                            '0%, 100%': {
                                transform: 'scale(1)', // Original size
                            },
                            '50%': {
                                transform: 'scale(1.05)', // Slightly larger
                            },
                        }
                    }}
                >
                    REGISTER NOW
                </Button>

            </Flex >
        </>
    );
};

export default Home;