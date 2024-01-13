import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
    text: string;
    url: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text, url }) => {
    return (
        <ChakraButton
            color="#FFCBA4"
            colorScheme='red'
            fontSize="25"
            w="250px"
            h="50px"
            as="a"
            href={url}
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
            _hover={{
                color: "pink",
            }}
        >
            {text}
        </ChakraButton>
    );
};

export default CustomButton;
