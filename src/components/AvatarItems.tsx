import { Avatar, Box, Text, VStack } from "@chakra-ui/react";

interface RoundAvatarProps {
    name: string;
    src: string;
    title: string | JSX.Element;
    avatarSize?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"; // Add avatarSize prop for responsiveness
    textSize?: string; // Add textSize prop for responsiveness
}

const RoundAvatar: React.FC<RoundAvatarProps> = ({ name, src, title, avatarSize = "2xl", textSize = "xl" }) => {
    const fixedHeight = '60px'; // Adjust as needed

    return (
        <VStack minW="200px" align="center">
            <Box position={'relative'}>
                <Avatar
                    name={name}
                    src={src}
                    size={avatarSize} // Use the avatarSize prop
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
                <Text fontSize={textSize} fontWeight="bold" noOfLines={1} color={"#FFD8EA"}>{name}</Text> {/* Use the textSize prop */}
                {title}
            </Box>
        </VStack>
    );
};

export default RoundAvatar;
