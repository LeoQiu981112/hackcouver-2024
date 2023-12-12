
import React from 'react';
import { Text } from '@chakra-ui/react';

const Logo: React.FC = () => {
    return (
        <Text as="h1" fontSize="160" color="white">
            Hackcou<sup><Text as="span" fontSize="120" fontWeight={"bold"} color="red">{'<'}</Text></sup>er
        </Text>
    );
};

export default Logo;
