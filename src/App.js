import React, { Component } from 'react';

//1er elemento importado from Buscador.js
//en el componente buscador utilizare el prop (pasar elemento de padre a hijo)
//state es un objeto que tiene una llave y un valor
import Buscador from './componentes/Buscador';

class App extends Component {

  state = {
    termino: ''
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763${termino}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => console.log(resultado))

  }

  //nuevo metodo al componente principal para enviar lo del buscador a la consola
  datosBusqueda = (termino) => {
    this.setState({
      termino
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador</p>
      
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
