import { 
    Flex,
    Grid,

} from "@chakra-ui/react";

import {
    Text, 
    Image,
    Link
} from "@chakra-ui/react";


import Logo from "./Logo";
import instagram from "../assets/instagram_logo.png";
import linkendin from "../assets/linkendin_logo.png";
import twitter from "../assets/twitter_logo.png";


export default function Footer(){
    return(
        <>
       
        <Grid 
            id='Footer-grid'
            w='100vw' 
            bg='white'
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>

                

            {/* Navigation Links */}
            <Flex 
                justify='center'
                align='center'
                gap={2}
                m={8}
                >

                <Flex
                    id="Footer-logo-flex"
                    textColor='black'
                    align='center'
                    justify='center'>
                        <Link _hover={{transform: ['scale(1.1)', 'translateX(-10px)'], transition: 'transform .2s ease-in-out'}} href='#'>   
                            <Logo textColor={'black'} fontSize={"30px"}  marginBottom={'0'}/>
                        </Link>
                </Flex>

                <Flex 
                    id="Footer-nav-flex"
                    direction='column' 
                    justify='center'  
                    textAlign='left' 
                    textColor='black'>
                    <Link _hover={{color: 'red', transform: 'translateX(5px)'}} href='#about-us'>About Us</Link>
                    <Link _hover={{color: 'red', transform: 'translateX(5px)'}} href='#timeline'>Timeline</Link>
                    <Link _hover={{color: 'red', transform: 'translateX(5px)'}} href='#sponsors'>Sponsors</Link>
                    <Link _hover={{color: 'red', transform: 'translateX(5px)'}} href='#FAQs'>FAQs</Link>
                </Flex>
            </Flex>

    
        
            {/* Social Media Links  */}
            <Flex 
                bg='white' 
                direction='row' 
                justify='center'
                align='center'
                m={8}
                gap={8}>
          
                <Link href="https://www.instagram.com" isExternal>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={instagram}
                        alt='instagram logo'
                        _hover={{transform: 'scale(1.1)', transition: 'transform .2s ease-in-out'}}
                        fallbackSrc='https://via.placeholder.com/50'
                        />
                </Link>
                <Link href="https://www.linkendin.com" isExternal>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={linkendin}
                        alt='linkendin logo'
                        _hover={{transform: 'scale(1.1)', transition: 'transform .2s ease-in-out'}}
                        fallbackSrc='https://via.placeholder.com/50'
                    />
                </Link>
                <Link href="https://www.x.com" isExternal>
                    <Image
                        boxSize='50px'
                        objectFit='cover'
                        src={twitter}
                        alt='twitter logo'
                        _hover={{transform: 'scale(1.1)', transition: 'transform .2s ease-in-out'}}
                        fallbackSrc='https://via.placeholder.com/50'
                        />
                </Link>
                        
            </Flex>

           
        
    
        </Grid>

        {/* Copyright */}
        <Flex direction='column' fontSize='lg' align='center' justify='center' h='150px'>
            <Text>Organized by Vancouver.dev</Text>
            <Text>&copy; Vancouver.dev 2024</Text>
        </Flex>
      

        </>
    )
}