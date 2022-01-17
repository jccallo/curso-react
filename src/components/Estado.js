import React, { Component } from "react"

// componente Estado
export default class Estado extends Component {
    // se le pasa el objeto props al construtor de la clase y del padre
    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>El estado</h2>
                <p>{this.state.contador}</p>
            </div>
        )
    }
}