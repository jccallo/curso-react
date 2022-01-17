// para utilizar codigo jsx y la clase Component respectivamente
import React, {Component} from 'react'

// Componente basado en clase
class Componente extends Component {
    render() {
        // las propiedades enviadas se pueden usar directamente
        // se usa props como objeto que guarda las propiedades
        return <h1>{this.props.mensaje}</h1>
    }
}

// Componente funcional
// function Componente(props) {
//     return <h1>{props.mensaje}</h1>
// }

// Componente funcional escrito de otra manera
// const Componente = (props) => {
//     return <h1>{props.mensaje}</h1>
// }

// exportamos Componente
export default Componente;

