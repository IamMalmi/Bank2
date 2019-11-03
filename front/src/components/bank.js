import React from 'react';
import './bank.css';
import Bankname from './bankname.js';
import "./table.css";
import "./bankname.css"

const Bank=(props)=>{
    return (
        //<div className='Bank'><p onClick={props.clicked}><Bankname name={props.name}></Bankname></p>
         <div ><table border='' width='100%'><tr><td> {props.name}
         </td><td> {Math.round(props.amount* 100) / 100}
         </td><td> {Math.round(props.er * 100) / 100}
         </td></tr></table>
              
           
           </div>

);}
export default Bank
