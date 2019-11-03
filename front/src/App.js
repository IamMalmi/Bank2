import React,{Component}from 'react';
import logo from './logo.svg';

import './App.css';
import Picture from './components/picture';
import Maincontainer from './components/maincontainer.js';
import Layout from './components/layout';

class App extends Component{
  
//state={name:''};
  
  render(){
  return (
    <div className="App">
    <Layout/>
  <Maincontainer></Maincontainer> 
  
  </div>
  );
}}

export default App;
