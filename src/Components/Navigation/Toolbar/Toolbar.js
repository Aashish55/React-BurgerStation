import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Drawer from '../SideDrawer/Drawer/Drawer'

const toolbar = (props) => {
    return (
        <header className='Toolbar'>
            <Drawer clicked={props.drawerClicked} />
            <Logo />
            <nav className='DesktopOnly'>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;