import IncidenciaList from './components/incidenciaList'
import ComercianteList from './components/comercianteList'
import NotificacionesList from './components/notificacionesList'
import { useState } from 'react'
import './App.css'

function App() {
  const [vistaActual, setVistaActual] = useState("incidencia");

  return (
    <>
      <div className="App">
        <button onClick={() => setVistaActual("comerciante")}> Comerciante </button>
        <button onClick={() => setVistaActual("incidencia")}> Incidencia </button>
        <button onClick={() => setVistaActual("notificacion")}> Notificacion </button>

        {vistaActual === "incidencia" && <IncidenciaList />}
        {vistaActual === "comerciante" && <ComercianteList />}
        {vistaActual === "notificacion" && <NotificacionesList />}
      </div>
    </>
  )
}

export default App
