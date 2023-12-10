import { Center, Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Card, CardBody, } from '@chakra-ui/react'

import NavBarComponent from './NavBarComponent';


export default function FAQ() {

    const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales nisl magna, et consequat mi ullamcorper eu. Integer vehicula dapibus lacus eget accumsan. Fusce pellentesque arcu sed ex consequat, vitae faucibus sem viverra. Curabitur vulputate fringilla pretium. Maecenas a augue et elit tincidunt euismod. Nam eleifend, nisi suscipit consectetur finibus, orci odio malesuada lacus, vitae pretium nisi massa ac lectus. Vestibulum pulvinar odio vitae finibus maximus. Aliquam consequat dapibus lectus, eu pulvinar arcu imperdiet non."


    const QandA = [
        {
            question: "Q: Lorem Ipsum?",
            answer: LoremIpsum
        },
        {
            question: "Q: Lorem Ipsum?",
            answer: LoremIpsum
        },
        {
            question: "Q: Lorem Ipsum?",
            answer: LoremIpsum
        }
    ]

    return (
        <>
        <NavBarComponent />
        
        <Center> 
            <Heading>FAQ</Heading>
        </Center>
        
        <Flex direction={'column'} gap={'6'} margin={'4rem'} align={'center'} >
            {QandA.map((item) => (
                <Card padding={'1rem'} key={item.question} maxWidth={'800px'}>
                    <Heading>{item.question}</Heading>
                    <CardBody>
                        {item.answer}
                    </CardBody>
                </Card>
            ))}
        </Flex>

        </>

    )
}

