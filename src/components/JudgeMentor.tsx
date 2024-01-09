import { Flex, Grid, GridItem, CardBody, CardHeader } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

import { Avatar } from '@chakra-ui/react'
import { Wrap, WrapItem } from "@chakra-ui/react";
import { RoundAvatar } from "./AvatarItems";


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


                <Flex wrap='wrap' align='center' justify='center' gap='20'>

                    <RoundAvatar />

                </Flex>

            </Flex>
        </>

    )
}

