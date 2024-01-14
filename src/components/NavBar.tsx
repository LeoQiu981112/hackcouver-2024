import { useState, useEffect } from 'react';
import { IconButton, Link } from '@chakra-ui/react'
import { useDisclosure, SlideFade, Flex, Box } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
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
          md: '48rem',
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
            name: 'Panelists',
            path: '#panelists',
            
        },
        {
            name: 'Judge & Mentor',
            path: '#judgement',
        },
        {
            name: 'Sponsors',
            path: '#sponsors',
        },
        {
            name: 'FAQ',
            path: '#FAQs',
        },
        {
            name: 'Contact Us',
            path: '#contact-us',
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
                position='fixed'
                bg={'#2f2440'}
                zIndex={20}
                w={'100%'}
                py={'1rem'}
                px={'8rem'}
                justify="space-between"
                >

                {/* NavBar Logo */}
                <Link href={'#home'} _hover={{ textDecoration: 'none' }}>
                        <Box 
                            position={'absolute'}
                            top={5}
                            ml={20}
                            zIndex={20}
                            left={innerWidth/2-50}
                            >
                           
                            <Logo fontSize="1.5rem" />
                      
                        </Box>
                </Link>

                {/* NavBarDesktop */}
                <Flex
                    opacity={0.9}
                    gap={10}
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
            
                <Flex
                    top={-1}
                    left={0}
                    position="fixed"
                    zIndex={20}
                    bg={'#342847'}
                    w={'100%'}
                    justify={'space-between'}
                    py={'10px'}
                    >

                    <Menu id="NavBar-Menu" closeOnSelect={true} autoSelect={false}>

                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon boxSize={8} color={'#B94949'} />}
                            outline={'none'}
                            border={'none'}
                            bg={'none'}
                            w={'50px'}
                            h={'50px'}
                            _hover={{ outline: 'none'}}
                            _active={{ outline: 'none'}}
                            />

                            <MenuList textColor={'black'} _hover={{outline:'none', border:'none', textColor:"#2F2440"}}>
                                {pages.map((page, index) => (
                                    <MenuItem
                                        style={{textDecoration: 'none'}}
                                        _hover={{outline:'none', border:'none', textColor:"#2F2440"}}>
                                        
                                        <Link href={page.path} key={index} _hover={{textDecoration: 'none'}}>
                                            {page.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuList>
                    </Menu>
                            
                    {/* NavBar Logo */}
                    <Link href={'#home'} _hover={{ textDecoration: 'none' }}>
                        <Box 
                            position={'absolute'}
                            top={5}
                            zIndex={20}
                            left={innerWidth/2-50}
                            >
                           
                            <Logo fontSize="1.5rem" />
                      
                        </Box>
                    </Link>

                </Flex>



           
        </>
    );
}


