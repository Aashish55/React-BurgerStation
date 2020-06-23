import React from 'react';
import './LayoutStyle.css';

const layout = (props) => (
    <div>
        <div>
            ToolBar, drawer, backdrop
        </div>
        <main className='Content'>
            {props.children}
        </main>
    </div>
);

export default layout;