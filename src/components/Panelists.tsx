import React from "react";
import NavBarComponent from './NavBarComponent';
import { Flex, Grid, GridItem, Center, CardBody, CardHeader } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from "@chakra-ui/react";
import { RoundAvatar, SquareAvatar } from "./AvatarItems";


export default function FAQ() {

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
        <NavBarComponent />

        <Flex direction={'column'} gap={8}>

                    <Center> 
                        <Heading>Opening Ceremony Panelist</Heading>
                    </Center>

               
                <Flex align={'center'} justify={'center'} gap={20}>
                    {/* Judges */}
                    <Card padding={'1rem'}>
                        <CardHeader>
                            <Heading>Judges</Heading>
                        </CardHeader>

                        <CardBody>
                            <Grid templateColumns='repeat(4, 1fr)' gap={10} margin={'8px'}>
                            {Judges.map(() => (
                                <GridItem colSpan={1}>
                                    <Wrap>
                                        <WrapItem>
                                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        </WrapItem>
                                    </Wrap>
                                </GridItem>
                            ))}
                            </Grid>
                        </CardBody>

                    </Card>
                    
                    {/* Mentors */}
                    <Card padding={'1rem'}>
                        <CardHeader>
                            <Heading>Mentors</Heading>
                        </CardHeader>

                        <CardBody>
                            <Grid templateColumns='repeat(4, 1fr)' gap={10} margin={'8px'}>
                                {Judges.map(() => (
                                    <GridItem colSpan={1}>
                                        <Wrap>
                                            <WrapItem>
                                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                            </WrapItem>
                                        </Wrap>
                                    </GridItem>
                                ))}
                            </Grid>
                        </CardBody>
                    </Card>


                    <Card>
                        <RoundAvatar />
                    </Card>
                    <Card>
                        <SquareAvatar/>
                    </Card>
                </Flex>





        </Flex>
        </>

    )
}

