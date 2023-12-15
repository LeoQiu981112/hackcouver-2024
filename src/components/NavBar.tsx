import React, { useState, useEffect } from 'react';
import { Box, Link, useDisclosure, SlideFade, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() { 
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            // Calculate the current scroll position
            const currentScrollY = window.scrollY;
    
            if (currentScrollY < lastScrollY) {
                // Scrolling up
                if (!isOpen) {
                    onToggle(); // Show navbar if it's not already open
                }
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past a certain threshold (e.g., 100px)
                if (isOpen) {
                    onToggle(); // Hide navbar if it's open
                }
            }
    
            // Update the last scroll position
            setLastScrollY(currentScrollY);
        }
    };
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY, isOpen, onToggle]);

    const pages = [

        {
            name: 'Home',
            path: '#',
        },
        {
            name: 'About Us',
            path: '#about-us',
        },
        {
            name: 'Timeline',
            path: '#timeline',
        },
        {
            name: 'Sponsors',
            path: '#sponsors',
        },
        {
            name: 'Panelists',
            path: '#panelists',
        },
        {
            name: 'Contact Us',
            path: '#contact-us',
        },
        {
            name: 'FAQs',
            path: '#FAQs',
        },

    ]

    return (
        <SlideFade in={isOpen} offsetY="20px">
            <Flex
                as="nav"
                position="fixed" // Set to fixed
                top={0}         // Position at the top of the viewport
                left={0}
                right={0}
                zIndex={1}      // Ensure it's above other content
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                color="white"
                marginX='2rem'
                opacity={0.9}
                fontSize={'1.5rem'}
                mb={'4rem'}
            >
                {pages.map((page, index) => (
                    <Link href={page.path} key={index}>
                        {page.name}
                    </Link>
                ))}
            </Flex>
        </SlideFade>
    );
}