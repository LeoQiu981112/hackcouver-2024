
import { Text } from '@chakra-ui/react';

interface LogoProps {
    textColor?: string;
    fontSize?: string;
    marginBottom?: string;
}

export default function Logo({ fontSize = '128' }: LogoProps) {
    return (
        <Text as="h1" fontSize={fontSize} fontWeight={"bold"}  >
            Hackcou<sup><Text as="span" fontWeight={"bold"} color="red">{'<'}</Text></sup>er
        </Text>
    );
}

