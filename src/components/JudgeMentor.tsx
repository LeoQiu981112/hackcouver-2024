import {
    Flex, Grid, GridItem,
    useBreakpointValue,

} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import Judge from './Judge';

export default function JudgeMentor() {

    const Judges = [
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        },
        {
            name: "Dan Abrahmov",
            avatar: "https://bit.ly/dan-abramov",
            score: 3
        }
    ]

    // Define responsive sizes for avatar and text
    const avatarSize = useBreakpointValue({ base: "md", md: "xl" });
    const textSize = useBreakpointValue({ base: "sm", md: "md" });

    return (
        <>
            <Flex id='Panelists-flex' direction='column' gap={8} align='center'>
                <Heading as='h1' size='2xl' margin='2rem'>Judges & Mentors</Heading>

                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)" }} gap={6} px={4} w="full">
                    {Judges.map((judge, index) => (
                        <GridItem key={index} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Judge
                                name={judge.name}
                                title="Amazon Software Engineer"
                                src={judge.avatar}
                                size={avatarSize}
                                textSize={textSize}
                            />
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </>
    );
}

