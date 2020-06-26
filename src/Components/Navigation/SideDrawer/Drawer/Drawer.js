import React from 'react'
import './Drawer.css'

const drawer =(props)=>{
    return (
        <div className='DrawerToggle' onClick={props.clicked} >
           <div></div>
           <div></div>
           <div></div>
        </div>
    );
}

export default drawer;