import React,{Component} from 'react';
//import { ReactComponent } from "*.svg";
import '../assests/admin.jpeg';

class Picture extends Component{
    render(){
        return(
        <div className='Picture'>
    <img height='300px' src={require('../assests/admin.jpeg')} alt='bank'></img></div>
        );
        
    }
}

export default Picture;