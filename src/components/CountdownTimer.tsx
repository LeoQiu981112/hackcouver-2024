import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Box>
            {Object.keys(timeLeft).length ? (
                <Flex gap={4}>
                    {Object.keys(timeLeft).map((interval) => (
                        <Box key={interval} p={5}>
                            <Text fontSize="40px" color="white">
                                {timeLeft[interval]}
                            </Text>
                            <Text fontSize="20" color="gray.200">
                                {interval}
                            </Text>
                        </Box>
                    ))}
                </Flex>
            ) : (
                <Text fontSize="2xl" color="red.500">
                    Time's up!
                </Text>
            )}
        </Box>
    );
};

export default CountdownTimer;
