import logo from './logo.svg';
import './App.css';

// importamos componente Componente
import Componente from "./components/Componente"

// importamos componente Propiedades
import Propiedades from "./components/propiedades"

// importamos componente Estado
import Estado from "./components/Estado"

// importamos componente RenderizadoCondicional
import RenderizadoCondicional from './components/RenderizadoCondicional'

// importamos componente RenderizadoElementos
import RenderizadoElementos from './components/RenderizadoElementos'

// importamos componente EventosES6 y EventosES7
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';

// importamos componente ComunicacionComponentes
import ComunicacionComponentes from "./components/ComunicacionComponentes"

// importamos componente CicloVida
import CicloVida from './components/CicloVida';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            {/* pruebas */}
            <section>

                {/* agregamos componente Componente y enviamos una propiedad mensaje */}
                <Componente mensaje="Esto es un componente" /> 
                
                <hr />

                {/* agregamos componente Propiedades */}
                {/* para enviar una propiedad de tipo string se usa las comillas */}
                {/* para enviar todo lo demas se usa las llaves */}
                <Propiedades
                    nombre="Armando"
                    edad={30}
                    esCasado={true}
                    arregloNumeros={[1, 2, 3]}
                    datos={{ nombre: "Armando", apellido: "Morales" }}
                    funcion={numero => numero * numero}
                    elementoReact={<i>Elemento React jsx pasado como propiedad</i>}
                    componenteReact={<Componente mensaje="Componente pasado como propiedad" />} />

                <hr />

                {/* agregamos componente Estado */}
                <Estado /> 
                
                <hr />

                {/* agregamos componente RenderizadoCondicional */}
                <RenderizadoCondicional />
                
                <hr />

                {/* agregamos componente RenderizadoElementos */}
                <RenderizadoElementos />

                <hr />

                {/* agregamos componente EventosES6 y EventosES7 */}
                <EventosES6 />
                <EventosES7 />
                <MasSobreEventos />

                <hr />

                {/* agregamos componente ComunicacionComponentes */}
                <ComunicacionComponentes />
                
                <hr />

                {/* agregamos componente CicloVida */}
                <CicloVida />

            </section>

        </div>
    );
}

export default App;
