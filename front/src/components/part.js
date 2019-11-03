import React,{Component} from 'react';
import './part.css';
import './input.css';

class part extends Component{
    state={bank:[{name:'boc',rate:8,amount:''},{name:'Sampath',rate:12,amount:''},{name:'dfcc',rate:10,amount:''}],
    money:''};
    
    
        render(){
    return(
        <div >
    {this.props.label}<br/><input type="text" onChange={this.props.change}name={this.props.name} required/>
        </div>);
} }
export default part;