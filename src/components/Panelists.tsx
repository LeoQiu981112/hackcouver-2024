import { Flex, Heading, Text } from "@chakra-ui/react";
import RoundAvatar from './AvatarItems';
import annie from '../assets/profiles/annie.jpg';
import yk from '../assets/profiles/yk.jpg';
import toki from '../assets/profiles/toki.jpg';

export default function Panelists() {
    return (
        <>
            <Flex id='Panelists-flex' direction='column' gap={8} align='center' justify='center' w='full'>
                <Heading as='h1' size='2xl' marginY='2rem' textAlign='center'>Opening Ceremony Panelists</Heading>

                <Flex wrap='wrap' align='center' justify='center' gap='20' w='full'>
                    <RoundAvatar
                        name="Toki"
                        src={toki}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>Founder @Vancouver.dev</Text>
                            </>
                        }
                    />
                    <RoundAvatar
                        name="Annie"
                        src={annie}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>Google Software Engineer</Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>Career Coach</Text>
                            </>
                        }
                    />
                    <RoundAvatar
                        name="YK"
                        src={yk}
                        title={
                            <>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>Product Manager</Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>Founder</Text>
                                <Text color={"#FFD8EA"} fontWeight={"bold"} textAlign='center'>International Keynote Speaker</Text>
                            </>
                        }
                    />
                </Flex>
            </Flex>
        </>
    )
}