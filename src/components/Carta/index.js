import React, { Component } from 'react';
import './index.css'
export default class Carta extends Component{
  render(){
    return(
      <div className = 'carta'>
         <img src = {this.props.imagen} />
      </div>
    )
  }
}