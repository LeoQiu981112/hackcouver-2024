import { Flex, Grid, GridItem, CardBody, CardHeader } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

import { Avatar } from '@chakra-ui/react'
import { Wrap, WrapItem } from "@chakra-ui/react";
import RoundAvatar from './AvatarItems';
import { Text } from "@chakra-ui/react";
import annie from '../assets/profiles/annie.jpg';
import yk from '../assets/profiles/yk.jpg';
import toki from '../assets/profiles/toki.jpg';


export default function Panelists() {

    return (
        <>
            <Flex id='Panelists-flex' direction='column' gap={8} align='center'>


                <Heading as='h1' size='2xl' margin='2rem'>Opening Ceremony Panelists</Heading>


                <Flex wrap='wrap' align='center' gap='20'>
                    <RoundAvatar
                        name="Toki"
                        src={toki}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>Founder @Vancouver.dev</Text> </>
                        }
                    />
                    <RoundAvatar
                        name="Annie"
                        src={annie}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>Google Software Engineer</Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>Career Coach</Text>
                            </>
                        }
                    />
                    <RoundAvatar
                        name="YK"
                        src={yk}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>Product Manager  </Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>Founder  </Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"}>International Keynote Speaker</Text>
                            </>
                        }
                    />


                </Flex>






            </Flex>
        </>

    )
}

