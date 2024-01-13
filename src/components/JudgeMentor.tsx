import { Flex, Grid, GridItem } from "@chakra-ui/react";
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

    return (
        <>
            <Flex id='Panelists-flex' direction='column' gap={8} align='center'>


                <Heading as='h1' size='2xl' margin='2rem'>Judges & Mentors </Heading>


                <Flex wrap='wrap' align='center' justify='center'>

                    <Grid templateColumns="repeat(2, 1fr)" >
                        {[...Array(6)].map((_, index) => (
                            <GridItem key={index}>
                                <Judge name="Alex" title="Amazon Software Engineer" src="https://bit.ly/dan-abramov" />
                            </GridItem>
                        ))}
                    </Grid>

                </Flex>

            </Flex >
        </>

    )
}

