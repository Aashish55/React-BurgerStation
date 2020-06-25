import React from 'react';
import './BackDrop.css'

const backDrop =(props)=>(
    props.show?<div className='BackDrop' onClick={props.clicked}></div>:null
);

export default backDrop;