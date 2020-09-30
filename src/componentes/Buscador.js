import React, { Component } from 'react';

//1designo clase buscador
//2render indica que imprimo en el componente
//creo ref antes de render (utilizarlo en el placeholder del buscador) 
class Buscador extends Component {

    busquedaRef = React.createRef();

    //en form agrego el evento onSubmit para la f(x) obtenerDatos
    obtenerDatos = (e) => {
        e.preventDefault();

        //tomo el valor del input
        const termino = this.busquedaRef.current.value;

        //los envío al componente principal (app.js)
        this.props.datosBusqueda(termino);
    }

    //para imprimir el prop de App.js/buscador lo agrego bajo el row
    render() { 
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-md" placeholder="Buscar. Ejemplo: Notebook" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-md btn-danger btn-block" value="Buscar..." />
                    </div>
                </div>
            </form>
         );
    }
}

//exporto la clase buscador
export default Buscador;