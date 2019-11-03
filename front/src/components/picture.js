import React from 'react';
import './picture.css'
const Picture=(props)=>(
    <div className='Picture'>
    <img src={require('../assests/deposit.jpeg')} alt='bank'></img></div>
);
export default Picture;
//<img src={require('/images/image-name.png')} />