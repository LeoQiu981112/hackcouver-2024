import { useState, useEffect } from 'react';
import { IconButton } from '@chakra-ui/react'
import { Link, useDisclosure, SlideFade, Flex, Box } from '@chakra-ui/react';
import { ExternalLinkIcon, AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import Logo from './Logo';
import { useBreakpointValue } from '@chakra-ui/react'

interface Page {
    name: string;
    path: string;
}

export default function NavBar() {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
    const [lastScrollY, setLastScrollY] = useState(0);


    
    const NavBreakPoint = useBreakpointValue(
        {
          base: 'base',
          md: '8rem',
        },
    )

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
        // {
        //     name: 'Timeline',
        //     path: '#timeline',
        // },
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
            name: 'FAQ',
            path: '#FAQs',
        },

    ]

    return (
        <SlideFade in={isOpen} offsetY="20px">
            {(NavBreakPoint=="base") ? <NavBarMobile pages={pages}/> : <NavBarDesktop pages={pages}/> } 
        </SlideFade >
    );
}


function NavBarDesktop({ pages }: { pages: Page[] }) {

    return (
        <>
        <Flex
                id="NavBar-Flex"
                direction="row"
                justify="center"
                mx={10}
                my={5}
                gap={40}
                >
                <Box>
                    <Logo fontSize="1.5rem" />
                </Box>
                <Flex
                    bg="#2F2440"
                    opacity={0.9}
                    gap={{ sm: 5, md: 10 }}
                    fontSize="1rem" // Smaller font size for the text
                    >
                    {pages.map((page, index) => (
                        <Link href={page.path} key={index} _hover={{ textDecoration: 'none' }}>
                            {page.name}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </>
    );
}

function NavBarMobile({pages }: { pages: Page[] }) {

    return (
        <>
            
                <Box
                    top={0}
                    left={0}
                    position="fixed"
                    >

                
                    <Menu
                        id="NavBar-Menu"
                        >
                        
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon boxSize={5} />}
                        w={'3rem'}
                        h={'3rem'}
                        bg={'white'}
                        />
                    <MenuList>
                        <MenuItem icon={<AddIcon />} command='⌘T'>
                        New Tab
                        </MenuItem>
                        <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                        New Window
                        </MenuItem>
                    </MenuList>
                    </Menu>
                </Box>

                <Flex
                    id="NavBar-Logo-Flex"
                    direction="row"
                    justify="center"
                    align={'center'}
                    my={3}
                    >
                    <Logo fontSize="1.5rem" />
                </Flex>

           
        </>
    );
}


