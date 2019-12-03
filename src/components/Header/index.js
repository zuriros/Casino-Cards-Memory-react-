import React, { Component } from 'react';
import './index.css'

export default class Header extends Component{
  render(){
    return(
      <header>
         <div className = 'titulo'>TURNS:</div> 
         <div className = 'titulo'>MATCH:</div>
         <div className = 'titulo'>$</div>
         <div className = 'titulo'>TIME:</div>
      </header>
    )
  }
}