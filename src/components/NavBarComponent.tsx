import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'



const NavBarComponent: React.FC = () => {
    return (
        <Stack direction="row" paddingTop={5} spacing={"80px"}>
            <Text color='white' fontSize={25} fontWeight={"medium"}>Hackcouver</Text>
            <Breadcrumb spacing={"60px"} separator={""} >
                <BreadcrumbItem>++--
                    <BreadcrumbLink as={Link} to='/' color='white' fontSize={25}>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/About' color='white' fontSize={25}>
                        About
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>

                    <BreadcrumbLink as={Link} to='/Folks' color='white' fontSize={25}>
                        Folks
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/Contact' color='white' fontSize={25}>
                        Contact Us
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Stack>
    );
};

export default NavBarComponent;
