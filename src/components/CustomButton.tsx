import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

interface ButtonProps {
    text: string;
    url?: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text, url, width='250px', height='50px', fontSize='25' }) => {
    return (
        <ChakraButton
            color="#FFCBA4"
            colorScheme='red'
            fontSize={fontSize}
            w={width}
            h={height}
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
