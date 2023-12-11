

import { Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

export default function NavBar() { 

    const pages = [

        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'TimeLine',
            path: '/timeline',
        },
        {
            name: 'Sponsors',
            path: '/sponsors',
        },
        {
            name: 'Panelists',
            path: '/panelists',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
        {
            name: 'FAQ',
            path: '/faq',
        },

    ]

    return (
        <>
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1rem"
            color="white"
            marginX='2rem'
            fontSize={'1.5rem'}
        >

            {pages.map((page => (
                <Link to={page.path}> {page.name} </Link>
            )))}
            
        </Flex>
        </>
    )

}