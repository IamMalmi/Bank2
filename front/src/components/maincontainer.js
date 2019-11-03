import React,{Component} from 'react';
import Part from './part';
import './maincontainer.css';
import Picture from './picture';
import Part2 from './part2';
import Part3 from './part3';
import './part3.css';
import { notEqual } from 'assert';
import {withRouter} from 'react-router-dom';
import Table from '../table';
import { Link } from 'react-router-dom';
import './button.css';
import Bank from './bank';
import "./table.css";

class Maincontainer extends React.Component{
    
    state={bank:[{name:'BOC',rate:14,amount:'',er:''},
    {name:'Sampath',rate:12,amount:'',er:''},
    {name:'HNB',rate:9,amount:'',er:''},
    {name:'Peoples Bank',rate:12,amount:'',er:''},
    {name:'NDB',rate:10.5,amount:'',er:''},
    {name:'Seylan',rate:11,amount:'',er:''},
    {name:'Commercial Bank',rate:9.5,amount:'',er:''},
    {name:'NSB',rate:11.5,amount:'',er:''},
    {name:'DFCC',rate:10,amount:'',er:''}],
money:'',
year:'',
month:'',
show:false,

//cal:function({this.state.bank}){
//    console.log(item<
//}
//}
//cal:(bank)=>{console.log(bank.name)}

cal:()=>{
  
   for(let i=0;i<=8;++i)
   {console.log(this.state.bank[i].name);
   this.state.bank[i].amount=(((this.state.bank[i].rate)/1200)*this.state.money*this.state.month )+ +(((this.state.bank[i].rate)/100)*this.state.money*this.state.year);
   this.state.bank[i].er=this.state.bank[i].amount + +this.state.money;
   console.log(this.state.bank[i].amount);}
}}
//cal:()=>{
    
   // for(var count=0;count<=this.state.bank.length;++count)
   // console.log(this.state.bank[count].name);
//}}


//handleClick = () => {
  // return 
   //<div>ooooooooo</div>
//};

submitHandler= (array)=> {
    
    array.amount=(((this.state.rate)/1200)*this.state.money*this.state.year) + +((this.state.rate/100)*this.state.money*this.state.month);
    console.log(array.amount);
  };
  handleMoneyChange= (e) =>{
    this.state.money=e.target.value};
  
    handleTimeChange= (e)=>{
       this.state.time=e.target.value
    //    console.log(e.targee) =>{t.value);
}
switchShow=(array)=>{
    
    
    this.state.cal();
    this.setState({show:true});
}
yearChange= (e) =>{
  this.state.year=e.target.value};
monthChange= (e) =>{
    this.state.month=e.target.value};  




        render(){
                
            let Banks=null;
            let Image=null;
  if(this.state.show)
  {
    Banks=(
            <div>
            <table border='1'width='100%' ><tr><th> Bank Name
        </th><th> Profit(Rs)</th><th> Expected Return(Rs)</th></tr></table>
            {this.state.bank.map((person,index)=>{
              return <Bank
              name={person.name}
              amount={person.amount}
              er={person.er}/>
              //clicked={()=>this.deletePerson(index)}/>
            })}++
             </div>);}
             else {
     Image=(
         <div><Picture/>
        </div>
     )}
        
        return(
                    
        <div className='Maincontainer'><h2>Bank Investment</h2>
        
       
       
        
        <Part label='Amount' change={this.handleMoneyChange}></Part>
        <p>Investment Period</p>
    <Part3 change1={this.yearChange} change2={this.monthChange}></Part3><br/>
    
    <button onClick={this.switchShow}>Calculate</button>
    {Banks}{Image}
   
    
</div>
        
    
        )}}

  export default Maincontainer;