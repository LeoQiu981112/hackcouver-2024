import { Flex } from "@chakra-ui/react"
import { Heading, Link, Button } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
  } from '@chakra-ui/react'

export default function Contact() {


    return (
        <>

            <Flex 
                id='Contact-Us-Flex'
                direction='column'
                justify={'center'}
             
                my='4rem'
                width={{base: '80vw', md: '1/2'}}
                mx={'auto'}
                gap={10}
                >

                <Heading as='h1' size='2xl' mt='1rem' mb='4rem' textAlign={'center'}>Contact Us</Heading>
            
                <Flex
                    gap={10}>
                    <FormControl >
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' />
                    </FormControl>

                    <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email</FormHelperText>
                    </FormControl>
                </Flex>

                <Flex >
                    <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                        height={'10rem'}
                        placeholder='Your Message' />
                    </FormControl>
                </Flex>

                <Button colorScheme='red' variant='solid' px={20} mx={'auto'}>
                    Email Us
                </Button>

                <Flex
                    direction={{base: 'column', md: 'row'}}
                    gap={10}
                    mt={20}
                    fontSize="1.2rem"
                    align={'center'}
                    justify={'center'}
                    >
                    <Link>
                        Become a Volunteer
                    </Link>
                    <Link>
                        Code of Conduct
                    </Link>
                </Flex>

            </Flex>
        </>
    )

}

