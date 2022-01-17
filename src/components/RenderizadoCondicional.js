import React, { Component } from "react"

// componentes funcionales para la prueba
function Ingresar() {
    return <h3>Ingresar</h3>
}
function Salir() {
    return <h3>Salir</h3>
}

// componente RenderizadoCondicional
export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sesion: true
        }
    }

    render() {
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {/* usamos componentes en una condicional */}
                {this.state.sesion ? <Ingresar /> : <Salir />}
            </div>
        )
    }
}