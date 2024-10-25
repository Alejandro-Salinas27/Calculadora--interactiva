import React, { Component } from 'react';
import Display from './Display';
import PanelDeBotones from './PanelDeBotones';
import operaciones from '../Logic/operaciones';
import './App.css';

class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null,
    expresion: '', // Añadimos la propiedad para la expresión
  };

  handleClick = (nombreDeBoton) => {
    this.setState((prevState) => operaciones(prevState, nombreDeBoton));
  };

  render() {
    return (
      <div className='component-app'>
        <Display value={this.state.expresion || '0'} /> {/* Usamos expresion aquí */}
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
