import { Flex, Heading, Grid, Box } from "@chakra-ui/react";
import CustomCard from "./CustomCard";
import CustomButton from "./CustomButton";
import { useBreakpointValue } from '@chakra-ui/react'

export default function Sponsors() {

    const BreakPoint = useBreakpointValue(
        {
          base: 'base',
          md: '48rem',
        },
    )

    return (
        <>
            <Flex id='Sponsors-flex' direction={'column'} align={'center'} justify={'center'} color="white" p={32}>
                <Heading as='h1' size='2xl' marginTop='1rem' marginBottom='4rem'>Sponsors</Heading>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={5} marginBottom='4rem' width="full">
                    {[...Array(3)].map((_, index) => (
                        <CustomCard key={index}
                            imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        />
                    ))}
                </Grid>
                 {/* Sponsor Button */}
                    <Box mt={10}>
                        {(BreakPoint=="base") ? 
                        <CustomButton text="SPONSOR US" url="https://www.google.ca" width='150px' height='40px' fontSize='16' />
                        : 
                        <CustomButton text="SPONSOR US" url="https://www.google.ca" />} 
                    </Box>
            </Flex>
        </>
    );
}
