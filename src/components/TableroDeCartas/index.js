import React, { Component } from 'react';
import Carta from '../Carta/index'
import './index.css'
export default class TableroDeCartas extends Component{
  render(){
    // const cartas = [1,2,3,4,5,6];
    // const cartas = [];
    // cartas[0] = '../imagenes/cartUno.jpg';
    // cartas[1] = '../imagenes/cartDos.jpg';
    // cartas[2] = '../imagenes/cartTres.jpg';
    // cartas[3] = '../imagenes/cartCuatro.jpg';
    // cartas[4] = '../imagenes/cartCinco.jpg';
    // cartas[5] = '../imagenes/cartSeis.jpg';
    return(
      <div className = 'tablero'>
      {/* aquí llamamos a baraja desde tablero de cartas  */}
         {this.props.baraja
           .map((carta) => <Carta imagen = {carta.imgns}/>)
         }
      </div>
      );
  }
}
