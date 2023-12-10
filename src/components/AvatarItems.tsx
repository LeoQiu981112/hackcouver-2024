import { Avatar, Wrap, WrapItem } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

export function RoundAvatar(){

    return (
        <>
            <Flex direction={'column'} justify={'center'} align={'center'}>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size='2xl' marginBottom={'1rem'}/>
                    </WrapItem>

                <Wrap>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
                    </WrapItem>
                </Wrap>
            </Flex>
        </>
    )
}


export function SquareAvatar(){

    return (
        <>
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                margin={'1rem'}
                />

            <Wrap>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/2048px-X_icon_2.svg.png" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name="Dan Abrahmov" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
                    </WrapItem>
            </Wrap>
        </Flex>
        </>
    )
    
}