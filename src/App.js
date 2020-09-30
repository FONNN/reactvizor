import React from 'react';

//1er elemento importado from Buscador.js
import Buscador from './componentes/Buscador';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador</p>

        <Buscador />
      </div>
    </div>
  );
}

export default App;
