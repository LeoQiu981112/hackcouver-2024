
import {
    Box, Flex, Text,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'


const steps = [
    { title: 'Mar 1 2024 Friday - Intro', description: 'The topic will be revealed, opening ceremony, team forming' },
    { title: 'weekend, Mon - Fri', description: 'Start working on the projects with your team members' },
    { title: 'Sat, Sun', description: 'Evaluation, Judging and award ceremony' },
]

function TimelineComponent() {
    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
    })

    return (


        <Stepper index={activeStep} orientation='vertical' height='400px' size='lg' gap='0' colorScheme='red'// Scales the size to 120%
        >
            {
                steps.map((step, index) => (
                    <Step key={index} >
                        <StepIndicator style={{ transform: 'scale(1.5)' }}>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box bgColor="blue">
                            <StepTitle fontSize="40px" color="white">{step.title}</StepTitle>
                            <StepDescription fontSize="30px" color="silver" >{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))
            }
        </ Stepper >


    )
}
export default TimelineComponent;
