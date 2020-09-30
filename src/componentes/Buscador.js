import React, { Component } from 'react';

//designo clase buscador
//render indica que imprimo en el componente
class Buscador extends Component {
    render() { 
        return ( 
            <form>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-md" placeholder="Buscar. Ejemplo: Notebook" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-md btn-danger btn-block" value="Buscar" />
                    </div>
                </div>
            </form>
         );
    }
}

//exporto la clase buscador
export default Buscador;