import React, { Component } from 'react';
// import logo from '../logo.svg';
import arrayDeImagenes from '../utils/arrayDeImagenes';
import Header from '../Header/index';
import TableroDeCartas from '../TableroDeCartas/index';
import construirBaraja from '../utils/construirBaraja';
import './index.css';

//este retorna el estado inical de nuestra aplicación
const getEstadoInicial = () => {
  const baraja = construirBaraja(); 
  //retorna un objeto por que el estado de la apliccación retorna un objeto
  return {
    baraja
  };
}

class App extends Component {
//   constructor(props) {
//      super(props)
//      this.state = {
//         newTask: "hola",
//      }
//   }

//   handleTaskChange = (event) => {
//     this.setState({
//        newTask: event.target.value,
//     })
//  }


constructor (props){
  super(props)
  this.state = getEstadoInicial();
}

render() {
     return (
        <div className="container">
           <Header/>
           <TableroDeCartas 
           //aquí conecto el estado baraja(son mis imagenes dentro del array a tableroDeCartas)
              baraja = {this.state.baraja}
           />          
           {/* <h1 className="title">
              Hello world
              <span aria-label="emoji" role="img">🔥</span>
           </h1>
           <input onChange={this.handleTaskChange} type="text" className="new-task"/>
           <h2 className="test-label">{this.state.newTask}</h2> */}

        </div>
     );
  }
}

export default App;
