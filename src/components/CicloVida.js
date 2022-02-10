import React, { Component } from 'react'

export default class CicloVida extends Component {
    // se ejecuta primero que todos
    constructor(props) {
        super(props)
        console.log(0, "El componente se inicializa, aun NO esta en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),   
            visible: false
        }

        this.temporizador = null
    }

    // se ejecuta tercero para cargar algunas otras cosas en el DOM
    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el Dom");
    }

    // se ejecuta cuando hay una actualizacion del estado
    // podemos acceder a las props del anterior y el estado anterior
    componentDidUpdate(prevProps, prevState) {
        console.log("El estado o las props han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    iniciar = () => {
        this.tictac()
        this.setState({
            visible: true
        })
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible: false
        })
    }

    // se ejecuta segundo dibujando el DOM
    render() {
        console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM");

        return (
            <>
                <h2>Ciclo de vida de los componentes de clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}

class Reloj extends Component {
    constructor(props) {
        super(props)
    }
    
    // se ejecuta cuando se elemina el componente
    componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM");
    }

    render() {
        return <h3>{this.props.hora}</h3>
    }
}