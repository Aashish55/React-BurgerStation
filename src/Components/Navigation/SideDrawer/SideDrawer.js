import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop'

const sideDrawer = (props) => {

    let classes =['SideDrawer','Close'];
    if(props.open){
        classes=['SideDrawer', 'Open'];
    }

    return (
        <div>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={classes.join(' ')}>
                <Logo height='10%' marginbottom='20px' />
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </div>
    );
}

export default sideDrawer;