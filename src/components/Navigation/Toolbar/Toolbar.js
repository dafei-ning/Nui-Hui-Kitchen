import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>

        <div className="LogoInToolbar">
            <Logo  />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;