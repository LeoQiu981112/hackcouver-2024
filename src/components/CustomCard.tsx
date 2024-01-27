import { Box, Avatar } from '@chakra-ui/react';

interface CustomCardProps {
    imageUrl: string;
}

const CustomCard = ({ imageUrl }) => {
    return (
        <Box
            size={'md'}
            align={'center'}
            variant='elevated'
            position='relative'
            overflow='hidden'
            transition='transform 0.3s ease-in-out, box-shadow 1.0s ease-in-out'
            _before={{
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(45deg, rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.4))',
                opacity: 0,
                transition: 'opacity 1s ease-in-out',
            }}
            _hover={{
                transform: 'scale(1.05)',
                _before: {
                    opacity: 1,
                },
            }}
        >
            <Avatar objectFit='cover' src={imageUrl} scale='0.5' />
        </Box>
    );
};

export default CustomCard;
