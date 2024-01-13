import { Box } from '@chakra-ui/react';

const FloatingCircles = () => {
    const colors = [
        'rgba(255, 255, 255, 0.2)', // Light white
        'rgba(255, 192, 203, 0.2)', // Light pink
        'rgba(255, 160, 122, 0.2)', // Light salmon
        'rgba(221, 160, 221, 0.2)', // Light plum
        'rgba(147, 112, 219, 0.2)', // Light medium purple
    ];

    const circleCoordinates = [
        { top: '-5vh', left: '-5vw' },
        { top: '10vh', left: '80vw' },
        { top: '30vh', left: '-5vw' },
        { top: '50vh', left: '90vw' },
        { top: '70vh', left: '10vw' },
        { top: '90vh', left: '50vw' },
        { top: '110vh', left: '-10vw' },
        { top: '-10vh', left: '100vw' },
        { top: '110vh', left: '100vw' },
    ];

    return (
        <>
            {circleCoordinates.map((coords, index) => (
                <Box
                    key={index}
                    position="fixed"
                    top={coords.top}
                    left={coords.left}
                    width="200px"
                    height="200px"
                    borderRadius="50%"
                    background={colors[index % colors.length]}
                    opacity="0.6"
                    filter="blur(20px)"
                    zIndex={1}
                />
            ))}
        </>
    );
};

export default FloatingCircles;