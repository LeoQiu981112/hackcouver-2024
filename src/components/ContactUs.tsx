import { 
    Flex, 
    Heading,
    Button, 
    Link, 
    useDisclosure } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Textarea
  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import { useBreakpointValue } from "@chakra-ui/react"
import { useState, useEffect  } from "react"

const w = 'emailPrefix'
const p = 'gmail'
const AT = '@'
const COM = '.com'

export default function Contact() {

    const BreakPoint = useBreakpointValue(
        {
          base: 'base',
          md: '48rem',
        },
    )

    const [ContactName, setContactName] = useState('');
    const [ContactEmail, setContactEmail] = useState('');
    const [ContactMessage, setContactMessage] = useState('');
    const [EmailSubmitBtnState, setEmailSubmitBtnState] = useState(true);


    
    const foo = () => {
        const e = w+AT+p+COM;
        return e
    }
    
    const isValidEmail = (email:string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      }
    
    const handleEmailSubmit = () => {
        if (isValidEmail(ContactEmail)) {
            console.log('Valid Email');
            console.log(foo());
        }else{
            console.log('Invalid Email');
            setContactEmail('');
        }
    }

    useEffect(() => {
        // Check if all fields are filled before allowing submission
        console.log(EmailSubmitBtnState)

        if (ContactName && ContactEmail && ContactMessage) {
            setEmailSubmitBtnState(false);
        }else{
            setEmailSubmitBtnState(true);
        }

    }, [ContactName, ContactEmail, ContactMessage, EmailSubmitBtnState]);


    return (
        <>

            <Flex 
                id='Contact-Us-Flex'
                direction='column'
                justify={'center'}
                my='4rem'
                width={{base: '80vw', md: '50vw'}}
                mx={'auto'}
                gap={5}
                >

                <Heading as='h1' size='2xl' mt='1rem' mb='4rem' textAlign={'center'}>Contact Us</Heading>
            
                <Flex
                    gap={10}
                    direction={(BreakPoint=='base'? 'column':'row')}
                    >

                    <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' value={ContactName} onChange={(e) => setContactName(e.target.value)} />
                    </FormControl>

                    <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email'  value={ContactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                    <FormHelperText>We'll never share your email</FormHelperText>
                    </FormControl>

                </Flex>

                <Flex >
                    <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                        height={(BreakPoint=='base')?'12rem':'7rem'}
                        value={ContactMessage}
                        placeholder='Your Message'
                        onChange={(e) => setContactMessage(e.target.value)}
                        maxLength={200} // Add character limit of 200
                    />
                    </FormControl>
                </Flex>



                <Flex
                    justify={'center'}
                    >

                    <Button
                        color="#FFCBA4"
                        bg='#E53E3E'
                        fontSize={'16'}
                        mt='2rem'
                        w={(BreakPoint=='base'? '200px':'300px')}
                        h={'40px'}
                        outlineColor={"white"}
                        css={{
                            animation: 'breathing 2s ease-in-out infinite',
                            '@keyframes breathing': {
                                '0%, 100%': {
                                    transform: 'scale(1)', // Original size
                                },
                                '50%': {
                                    transform: 'scale(1.05)', // Slightly larger
                                },
                            }
                        }}
                        _hover={{
                            color: "pink",
                        }}
                        onClick={handleEmailSubmit}
                        isDisabled={EmailSubmitBtnState}
                        >

                        Submit
                    </Button>
                
                </Flex>

                <Flex
                    direction={{base: 'column', md: 'row'}}
                    gap={10}
                    mt={28}
                    mb={20}
                    fontSize="1.2rem"
                    align={'center'}
                    justify={'center'}
                    >
                    <Link _hover={{color: 'red'}} textDecoration={'underline red 3px'}>
                        Become a Volunteer
                    </Link>
                    <Link  _hover={{color: 'red'}} textDecoration={'underline red 3px'}>
                        Code of Conduct
                    </Link>
                </Flex>

            </Flex>
        </>
    )
}



function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>Modal body text goes here.</p>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  