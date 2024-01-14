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


    const GeneralFAQ =[
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

    const TeamFAQ =[
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

    const LogisticsFAQ =[
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
        
        <Flex id='FAQ-flex' direction='column' gap='4' margin='2rem' align='center'>

            <Heading as='h1' size='2xl' margin='2rem'>FAQs</Heading>

            <Grid 
                id='FAQ-grid' 
                gap={4}
                templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
                mx={'auto'}
                width={{base: '80vw', md: '1/2'}}>


                    <Box mb='1rem'>
                        <Heading as='h2' size='lg' margin='1rem'>General</Heading>
                        <Flex direction='column'>
                            {GeneralFAQ.map((item, index) => (
                            <Accordion defaultIndex={[1]} allowMultiple>
                                <AccordionItem key={index} bg='white' textColor='black' margin={2}>
                                    <h2>
                                        <AccordionButton _expanded={{ bg: '#E7D2CC', color: 'black' }} p={2}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                {item.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p={2} m={1}>
                                        {item.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            ))}
                        </Flex>
                    </Box>

                    <Box mb='1rem'>
                        <Heading as='h2' size='lg' margin='1rem'>Teams</Heading>
                        <Flex direction='column'>
                            {TeamFAQ.map((item, index) => (
                            <Accordion defaultIndex={[1]} allowMultiple>
                                <AccordionItem key={index}  bg='white' textColor='black' margin={2}>
                                    <h2>
                                        <AccordionButton bg='white' _expanded={{bg: '#B9B7BD', color: 'black'}} p={2}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                {item.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={2} m={2}>
                                        {item.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            ))}
                        </Flex>
                    </Box>

                    <Box mb='1rem'>
                        <Heading as='h2' size='lg' margin='1rem'>Logistics</Heading>
                        <Flex direction='column'>
                            {LogisticsFAQ.map((item, index) => (
                            <Accordion defaultIndex={[1]} allowMultiple>
                                <AccordionItem key={index} bg='white' textColor='black' margin={2}>
                                    <h2>
                                        <AccordionButton _expanded={{ bg: '#D4F1F4', color: 'black' }} p={2}>
                                            <Box as="span" flex='1' textAlign='left'>
                                                {item.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={2} m={2}>
                                        {item.answer}
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            ))}
                            </Flex>
                    </Box>


            </Grid>





        </Flex>

        </>

    )
}

