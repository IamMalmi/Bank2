import React from 'react';
import './part.css';
import './input.css';

const part=(props)=>{
    return(
        <div className='part'>
        {props.label}<input type="text" name={props.name}/>
        </div>);
} 
export default part;