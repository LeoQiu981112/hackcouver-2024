
import { Text } from '@chakra-ui/react';

interface LogoProps {
    textColor?: string;
    fontSize?: string;
    marginBottom?: string;
}

export default function Logo({ textColor = 'white', fontSize = '140', marginBottom = '6rem' }: LogoProps) {
    return (
        <Text as="h1" fontSize={fontSize} color={textColor} mb={marginBottom} >
            Hackcou<sup><Text as="span" fontWeight={"bold"} color="red">{'<'}</Text></sup>er
        </Text>
    );
}

