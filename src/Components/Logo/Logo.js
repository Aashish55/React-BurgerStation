import React from 'react';
import BurgerLogo from '../../assets/images/burgerlogo.png'
import './Logo.css'
const logo =(props)=>{
    return (
        <div className='Logo' style={{height:props.height,marginBottom:props.marginbottom}}>
        <img src={BurgerLogo} alt='LOGO'  />
        </div>
    );
}

export default logo;