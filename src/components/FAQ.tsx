import { Flex, Grid } from '@chakra-ui/react';
import { Heading, Box } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'



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
        },
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
        
        <Flex id='FAQ-flex' direction='column' gap='6' margin='1rem' align='center' >

            <Heading as='h1' size='2xl' margin='2rem'>FAQ</Heading>

            <Box height='100%' width='100vw' maxWidth='800px' margin='1rem'>

            <Accordion allowMultiple>
                <Grid templateColumns='2'>
                    

                {QandA.map((item, index) => (
                    <AccordionItem key={index} bg='white' textColor='black' rounded={'md'} margin={'2rem'}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    {item.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} id=''>
                            {item.answer}
                        </AccordionPanel>
                    </AccordionItem>
                ))}

                </Grid>
                
            </Accordion>
            </Box>

        </Flex>

        </>

    )
}

