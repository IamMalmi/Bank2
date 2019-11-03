import React from 'react';
import "./toolbar.css";
import { Link } from 'react-router-dom'
const Toolbar=(props)=>
(
    
    <div className='Toolbar'><header>
    
    <nav>  </nav>
   <Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Sign up</Link>

    </header></div>
);

export default Toolbar;