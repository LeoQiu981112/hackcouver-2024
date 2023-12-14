import { Flex } from "@chakra-ui/react";
import {
    Heading,
    Card, CardHeader, CardBody, CardFooter,
    Text,
    Grid,
    Button,
    SkeletonCircle,
    SkeletonText,
    Image,
    Box
} from "@chakra-ui/react";
import CustomCard from "./CustomCard";


export default function Sponsors() {

    return (
        <>

            <Flex id='Sponsors-flex' direction={'column'} align={'center'} justify={'center'} color="white" bgColor={"green.100"} p={32}>
                <Heading as='h1' size='2xl' marginTop='1rem' marginBottom='4rem'>Sponsors</Heading>
                <Grid templateColumns='repeat(3, 1fr)' bgColor={"blue.100"} gap={5} >
                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>
                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>
                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>
                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>
                    <CustomCard
                        imageUrl='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    ></CustomCard>
                </Grid>
            </Flex>


        </>
    )

}