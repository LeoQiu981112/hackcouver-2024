import { useState, useEffect } from 'react';
import { Link, useDisclosure, SlideFade, Flex } from '@chakra-ui/react';

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
            <Flex
                as="nav"
                position="fixed"
                top={0}
                left={0}
                right={0}
                zIndex={1}
                align="center"
                justify="space-between"
                paddingY="1.5rem" // Increased padding on the Y axis for a taller navbar
                paddingX="1rem"   // X axis padding can remain the same
                bg="#2F2440"
                width="100vw"
                opacity={0.9}
                fontSize="1.2rem" // Smaller font size for the text
            >
                {pages.map((page, index) => (
                    <Link href={page.path} key={index} _hover={{ textDecoration: 'none' }}>
                        {page.name}
                    </Link>
                ))}
            </Flex>
        </SlideFade>
    );
}