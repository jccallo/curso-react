import React, { Component } from "react"

// como hay 2 clase en este archivo, no ponemos la palabra default en las clases
export class EventosES6 extends Component {
    constructor(props) {
        super(props)
        // estado
        this.state = {
            contador: 0
        }

        // debemos enlazar el metodo en el constructor
        // en este caso el metodo sumar y restar
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e) {
        console.log("Sumando")
        // seteamos el contador
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e) {
        console.log("Restando")
        // seteamos el estado
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    {/* evento onclick */}
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3> 
            </div>
        )
    }
}

export class EventosES7 extends Component {
    // estado
    state = {
        contador: 0
    }

    // creamos funciones de flecha
    // ya no bindeamos manualmente
    sumar = (e) => {
        console.log("Sumando")
        // seteamos el estado
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        console.log("Restando")
        // seteamos el estado
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    {/* evento onclick */}
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3> 
            </div>
        )
    }
}

export class MasSobreEventos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e) // evento sintetico de react
        console.log(e.nativeEvent) // evento nativo de javascript
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
    }

    render() {
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                {/* eventos de react son para las etiquetas jsx mas no para componentes */}
                <button onClick={(e) => this.handleClick(e, "Pasando parametro desde un elemento")}>Saludar</button>
                {/* esto es un evento pesonalizado, porque se le pasa una prop con la definicion de una funcion */}
                <Boton myOnClick={(e)=> this.handleClick(e, "Pasando parametro desde un elemento")} />
            </div>
        )
    }
}

function Boton(props) {
    // la etiqueta jsx button se le pasa el evento onClick con props.myOnClick
    return <button onClick={props.myOnClick}>Boton hecho componente</button>
}