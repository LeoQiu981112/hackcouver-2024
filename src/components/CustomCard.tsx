import React from 'react';
import { Box, Image, Heading } from '@chakra-ui/react';

const CustomCard = ({ imageUrl }) => {
    return (
        <Box
            size={'md'}
            align={'center'}
            variant='elevated'
            p={5}
            boxShadow='base'
            position='relative'
            overflow='hidden'
            transition='transform 0.3s ease-in-out, box-shadow 1.0s ease-in-out'
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(45deg, rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.4))',
                opacity: 0,
                transition: 'opacity 1s ease-in-out',
            }}
            _hover={{
                boxShadow: '0 0 30px rgba(128, 0, 128, 0.6), 0 0 25px rgba(128, 0, 128, 0.4), 0 0 10px rgba(128, 128, 128, 0.2)',
                transform: 'scale(1.05)',
                _before: {
                    opacity: 1,
                },
            }}
        >
            <Image objectFit='cover' src={imageUrl} />
        </Box>
    );
};

export default CustomCard;
