import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'

const NavBarComponent: React.FC = () => {
    return (
        <Stack direction="row" spacing={"80px"} >
            <Text color='white' fontSize={25} fontWeight={"medium"}>Hackcouver</Text>
            <Breadcrumb spacing={"60px"} separator={""} >
                <BreadcrumbItem >
                    <BreadcrumbLink as={Link} to='/' color='white' fontSize={25}>
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem key="about">
                    <BreadcrumbLink as={Link} to='/About' color='white' fontSize={25}>
                        About
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem key="timeline">
                    <BreadcrumbLink as={Link} to='/TimeLine' color='white' fontSize={25}>
                        TimeLine
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem key="panelists">
                    <BreadcrumbLink as={Link} to='/Panelists' color='white' fontSize={25}>
                        Panelists
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem key="contact">
                    <BreadcrumbLink as={Link} to='/Contact' color='white' fontSize={25}>
                        Contact Us
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem key="faq">
                    <BreadcrumbLink as={Link} to='/FAQ' color='white' fontSize={25}>
                        FAQ
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </Stack >
    );
};

export default NavBarComponent;
