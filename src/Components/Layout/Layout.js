import React from 'react';
import './LayoutStyle.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <div>
        
            <Toolbar />
            <SideDrawer />
        
        <main className='Content'>
            {props.children}
        </main>
    </div>
);


export default layout;