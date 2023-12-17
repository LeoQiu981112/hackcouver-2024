import React from 'react';
import { Box, Text, Heading, Grid, GridItem } from '@chakra-ui/react';
import RotatingSquare from './RotatingSquare'; // Assuming RotatingSquare is a custom component

const steps = [
    { title: 'Mar 1 2024 Friday - Intro', description: 'The topic will be revealed, opening ceremony, team forming' },
    { title: 'Weekend, Mon - Fri', description: 'Start working on the projects with your team members' },
    { title: 'Sat, Sun', description: 'Evaluation, Judging and award ceremony' },
];

function TimelineComponent() {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={6} p={4} alignItems="center">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <GridItem>
                        <RotatingSquare />
                    </GridItem>

                    <GridItem>
                        <Box>
                            <Heading color="white" size="md">{step.title}</Heading>
                            <Text color="silver">{step.description}</Text>
                        </Box>
                    </GridItem>
                </React.Fragment>
            ))}
        </Grid>
    );
}

export default TimelineComponent;
