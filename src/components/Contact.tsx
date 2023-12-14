import { Flex } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import NavBar from "./NavBar"

export default function Contact() {


    return (
        <>

            <Flex direction={'column'} align={'center'} justify={'center'} marginX={'1rem'} color={"white"}>

                <Heading as='h1' size='2xl' marginTop={'1rem'} marginBottom={'4rem'}>Contact Us</Heading>


                <Heading as='h2' size='xl'>Hello@hackouver.com</Heading>
                <Heading as='h1' size='lg'>Hackers:</Heading>
                <Heading as='h1' size='lg'>Sponsors:</Heading>
                <Heading as='h1' size='lg'>Mentors&Volunteers:</Heading>


            </Flex>


        </>
    )

}

