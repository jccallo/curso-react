import React from "react"

// importamos prop-types
// en las ultimas versiones de react esto no viene integrado y se tiene que instalar: npm install --save prop-types
import PropTypes from "prop-types"

// componente funcional Propiedades
export default function Propiedades(props) {
    return (
        <div>
            <h1>{props.porDefecto}</h1>
            <ul>
                <li>{props.nombre}</li>
                <li>{props.edad}</li>
                <li>{props.esCasado? "Casado" : "Soltero"}</li>
                <li>{props.arregloNumeros.join(", ")}</li> 
                <li>{props.datos.nombre + " - " + props.datos.apellido}</li> 
                <li>{props.arregloNumeros.map(props.funcion).join(", ")}</li> 
                <li>{props.elementoReact}</li> 
                <li>{props.componenteReact}</li> 
            </ul>
        </div>
    )
}

// agregar valores por default a las propiedades
// esto tambien crea esa propiedad aunque no se le mande
Propiedades.defaultProps = {
    porDefecto: "Las props"
}

// agregar los tipos de propiedades
Propiedades.propTypes = {
    // arroja un warning si le pasamos otro tipo de dato 
    nombre: PropTypes.string, 

    // arroja un warning si no enviamos la propiedad
    edad: PropTypes.number.isRequired // arroja
}