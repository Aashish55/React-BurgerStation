import React from 'react';
import './LayoutStyle.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <div>
        <div>
            <Toolbar />
        </div>
        <main className='Content'>
            {props.children}
        </main>
    </div>
);

export default layout;