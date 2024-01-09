import {
    Box, Heading, Flex, Link, Text, Button
} from "@chakra-ui/react"
import Logo from "./Logo"
import city from "../assets/city.png"

const Home = () => {

    return (
        <>
            <Box id="homebox" w="100%" h="130vh"
                background={`url(${city})`}
                backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" opacity={0.20} overflow="hidden">

            </Box>
            <Flex direction="column" position="absolute" top="0" align="center" w="100%" h="100vh" gap={10} justifyContent="center">
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