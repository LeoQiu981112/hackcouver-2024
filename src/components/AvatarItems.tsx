import {
    Avatar,

} from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Image, Box, Text, VStack } from "@chakra-ui/react"

interface RoundAvatarProps {
    name: string;
    src: string;
    title: string | JSX.Element; // Since we're passing a JSX element, we'll specify it here
}



const RoundAvatar: React.FC<RoundAvatarProps> = ({ name, src, title }) => {
    // Define a fixed height for the name and title containers
    const fixedHeight = '60px'; // Adjust as needed

    return (
        <VStack spacing="4" minW="200px" align="center"> {/* Align items to start */}
            <Box position={'relative'}>
                <Avatar
                    name={name}
                    src={src}
                    size='2xl'
                    showBorder={true}
                    border='4px solid white'
                />
                <Box
                    position={'absolute'}
                    inset="-2.5px"
                    borderRadius="full"
                    borderWidth="4px"
                    borderColor="#DAB2DB"
                    zIndex={1}
                />
            </Box>
            <Box textAlign="center" height={fixedHeight}>
                <Text fontSize="xl" fontWeight="bold" noOfLines={1} color={"#FFD8EA"}>{name}</Text> {/* Fixed height and truncate if necessary */}
                {title}
            </Box>
        </VStack>
    );
};

export default RoundAvatar;