import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const MenuComponent: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <Menu>
            <MenuButton as={Button}>
                Menu
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => handleNavigation('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleNavigation('/About')}>About</MenuItem>
                <MenuItem onClick={() => handleNavigation('/Folks')}>Folks</MenuItem>
                <MenuItem onClick={() => handleNavigation('/Sponsors')}>Sponsors</MenuItem>
                <MenuItem onClick={() => handleNavigation('/Panelists')}>Panelists</MenuItem>
                <MenuItem onClick={() => handleNavigation('/Judges')}>Judges</MenuItem>
                <MenuItem onClick={() => handleNavigation('/Contact')}>Contact</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default MenuComponent;
