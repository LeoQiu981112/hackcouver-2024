import { Flex, Grid } from '@chakra-ui/react';
import { Heading, Box } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'

import {GeneralFAQ, TeamFAQ, LogisticsFAQ} from './informationLists'



export default function FAQ() {


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
                                <Accordion 
                                    defaultIndex={[1]} key={index} 
                                    allowMultiple
                                   
                                    >
                                    
                                    <AccordionItem key={index} bg='white' textColor='black' margin={2}>
                                        <h2>
                                        <AccordionButton p={2} outline="none" rounded="none">
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
                                <Accordion defaultIndex={[1]} key={index} allowMultiple>
                                    <AccordionItem key={index}  bg='white' textColor='black' margin={2}>
                                        <h2>
                                            <AccordionButton p={2} outline="none" rounded="none">
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
                            <Accordion defaultIndex={[1]} key={index} allowMultiple>
                                <AccordionItem key={index} bg='white' textColor='black' margin={2}>
                                    <h2>
                                        <AccordionButton p={2} outline="none" rounded="none">
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

