import React, { Component } from "react"

// importamos json
import data from "../helpers/data.json"

// componente funcional
function ElementoLista(props) {
    return (
        <li>
            <a href={props.framework.web}>{props.framework.nombre}</a>
        </li>
    )
}

// componente RenderizadoElementos
export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estaciones: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render() {
        return (
            <div>
                <h2>Renderizado de elementos</h2>

                <h3>Estaciones del año</h3>
                {/* renderizado usando una etiqueta y se le pasa la key a esa etiqueta */}
                <ol>
                    {this.state.estaciones.map((estacion, index) => <li key={index}>{estacion}</li>)}
                </ol>

                <h3>Frameworks javascript</h3>
                {/* renderizado usando un componente y se le pasa la key a ese componente */}
                {data.frameworks.map((framework) => (
                    <ElementoLista key={framework.id} framework={framework} />
                ))}
            </div>
        )
    }
}