import { useState, useEffect } from 'react';
import { navLinks } from './informationLists';
import { IconButton, Link } from '@chakra-ui/react'
import { useDisclosure, SlideFade, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import Logo from './Logo';
import { useBreakpointValue } from '@chakra-ui/react'

interface PageComponent {
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


    return (
        <SlideFade in={isOpen} offsetY="20px">
            {(NavBreakPoint == "base") ? <NavBarMobile components={navLinks} /> : <NavBarDesktop components={navLinks} />}
        </SlideFade >
    );
}


function NavBarDesktop({ components }: { components: PageComponent[] }) {

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
                    <Logo fontSize="1.5rem" />
                </Link>

                {/* NavBarDesktop */}
                <Flex
                    opacity={0.9}
                    gap={10}
                    fontSize="1rem" // Smaller font size for the text
                >
                    {components.map((component, index) => (
                        <Link href={component.path} key={index} _hover={{ textDecoration: 'none' }}>
                            {component.name}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </>
    );
}

function NavBarMobile({ components }: { components: PageComponent[] }) {

    return (
        <>

            <Menu id="NavBar-Menu" closeOnSelect={true} autoSelect={false}>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon boxSize={8} color={'#B94949'} />}
                    outline={'none'}
                    border={'none'}
                    bg={'none'}
                    position={'fixed'}
                    w={'50px'}
                    h={'50px'}
                    _hover={{ outline: 'none' }}
                    _active={{ outline: 'none' }}
                    zIndex={30}
                />

                <MenuList textColor={'black'} _hover={{ outline: 'none', border: 'none', textColor: "#2F2440" }}>
                    {components.map((component, index) => (
                        <MenuItem
                            key={index}
                            style={{ textDecoration: 'none' }}
                            _hover={{ outline: 'none', border: 'none', textColor: "#2F2440" }}>

                            <Link href={component.path} key={index} _hover={{ textDecoration: 'none' }}>
                                {component.name}
                            </Link>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

            <Flex
                bg={'#342847'}
                position={'fixed'}
                justify={'center'}
                align={'center'}
                w={'100%'}
                h={'3rem'}
                zIndex={20}
            >

                <Link href="#" textDecoration={'none'} _hover={{ textDecoration: 'none', color: 'none' }} >
                    <Logo fontSize="1.5rem" />
                </Link>
            </Flex>







        </>
    );
}


