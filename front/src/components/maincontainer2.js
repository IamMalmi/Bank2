import axios from 'axios';
import React, { Component } from 'react';
import './container.css';
//import { ReactComponent } from "*.svg";
import './maincontainer.css';
import './operations.css';
import Part from "./part";
import Picture from "./picture2";



class Maincontainer extends Component{
  
 
    constructer(){
    this.state = {
        username: "",
        password: ""
    }}
     submitHandle(){
      axios.get('/localhost:9000/start')
        .then(res => {
          //this.state.username= 'malmi'
        console.log(res.data)})
        
        .catch(console.log('no'))
       //.catch(err => console.log(err))
     }
    /* async submitHandle(data,req,res) {
     
      console.log('Form submitted:');
       */
    
       // res.send('malmi')
       // console.log(req.body.name);
        //var myData = new User(req.body);
          //myData.save()
          //.then(item => {
            //res.send("item saved to database");
          /* })
          .catch(err => {
             res.status(400).send("unable to save to database");
           }) */
    
      //const todo = {
       //username:123,
       //passw//ord:this.state.password
      //};
      //axios.post("http://localhost:9000/login",todo )
        //.then(res => console.log(res.data));

        //this.setState({
         // username: '',
          //password: '',
         
      //}) 
      
      
  
    



handleUserNameChange = event => {
  this.setState({username: event.target.value});
}

handlePasswordChange = event => {
  this.setState({username: event.target.value});
}

  
    render(){
        return(
           /*  <div className='Maincontainer'>
            <h1>Bank Management</h1>
        <Picture></Picture>
        <div className='Operations'>
        <div className='Container'><h3>Remove Bank</h3>
        <Part label="Bank name"></Part>
       <br/>
        <button>Remove </button>
        
       <div className='Container'><h3>Add Bank</h3>
        <Part label="Bank name"></Part>
       <input type='text' onChange={this.onChangePersonName}></input>
      <Part label="Interest Rate"></Part><br/>
       <button onClick={this.onSubmit}>Add</button></div></div></div >);*/
       <form>
   <br></br>
   Username: <br></br>
   <input type = "text" name= "username" onChange={this.handleUserNameChange}></input>
   <br></br>
   <br></br>
   Password: <br></br>
   <input type = "text" name = "password" onChange={this.handlePasswordChange}></input>
   <br></br>
   <br></br>
   <input type = "submit" value = "Log-in" onClick={this.submitHandle}></input>
   <br></br>
    </form>)} 
  } 
export default Maincontainer;