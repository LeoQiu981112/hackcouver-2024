import { 
    Avatar,

} from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import { Image, Box } from "@chakra-ui/react"

export function RoundAvatar(){

    return (
        <>
            <Flex direction={'column'} position={'relative'}>
                <Avatar 
                    position={'relative'}
                    top={28}
                    left={-16}
                    name="Dan Abrahmov" 
                    src="https://bit.ly/dan-abramov" 
                    size='xl' 
                    marginBottom='1rem'/>
                <Box
                    bg='#00E0D4'
                    w={16}
                    h={200}
                    top={0}
                    left={2}
                    rounded={'full'}
                    position={'absolute'}/>

                <Avatar 
                    name="Dan Abrahmov" 
                    src="https://bit.ly/dan-abramov" 
                    size='xl'
                    left={7} 
                    marginBottom='1rem'/>
                    
            </Flex>
        </>
    )
}


export function SquareAvatar(){

    return (
        <>
    
        <Flex position={'relative'}>

            <Box 
                bg='#00E0D4' 
                w={100} 
                h={100} 
                top={-4} 
                left={-4}
                position={'absolute'} /> 

            <Box bg='white' w={100} h={100} position={'absolute'} top={2} left={2} />
            
            <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                zIndex={10}
                /> 

        </Flex>
        </>
    )
    
}