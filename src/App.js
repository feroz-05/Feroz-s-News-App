
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       country:'',
//       source:'general'
//     }
//     console.log(this.state.source);
//   }

// chooseSource =(data)=> {
//     this.setState({source: data})
//   }
  render() {
    return (
      <>
       <NavBar/> 
       <News/>
      </>
    )
  }
}


