import React, { useRef, useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

const RotatingSquare: React.FC = () => {
    const shadowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shadowElement = shadowRef.current;
        if (!shadowElement) return;

        let position = 0;
        let rotation = 0;
        let animationFrameId: number;

        const animate = () => {
            // Increment the background position
            position = (position + 1) % 400;
            shadowElement.style.background = `white`;
            shadowElement.style.backgroundSize = '200% 200%';
            shadowElement.style.backgroundPosition = `${position}% 30%`;

            // Continuous rotation
            rotation += 1;
            shadowElement.style.transform = `rotate(${rotation % 360}deg)`;

            animationFrameId = requestAnimationFrame(animate);
        };

        // Start the animation
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    });

    return (
        <>
            <Box
                ref={shadowRef}
                position="relative"
                margin="40px auto"
                width="1"
                height="15"
                borderRadius="20px"
                zIndex={-1} // Ensure the box is behind other content if needed
            >
            </Box>
        </>
    );
};

export default RotatingSquare;
