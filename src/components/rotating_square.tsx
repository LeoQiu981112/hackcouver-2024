import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

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
            shadowElement.style.backgroundSize = '400% 400%';
            shadowElement.style.backgroundPosition = `${position}% 50%`;

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
        <Box
            ref={shadowRef}
            position="relative"
            margin="100px auto"
            width="80px"
            height="80px"
            borderRadius="20px"
            zIndex={-1} // Ensure the box is behind other content if needed
        >
            {/* Content */}
        </Box>
    );
};

export default RotatingSquare;
