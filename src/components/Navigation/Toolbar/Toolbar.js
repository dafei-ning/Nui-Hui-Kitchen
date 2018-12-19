import React from 'react';
import './Toolbar.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.Toggle} />

        <div className="LogoInToolbar">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;