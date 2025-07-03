import { useState } from 'react'
import './App.css'
import ComerciantePages from './pages/ComerciantePages.tsx';
import IncidenciasPage from './pages/IncidenciaPages.tsx';
import NotificacionesPages from './pages/NotificacionesPages.tsx';

//hecho por: Neyser Delgado Meza, Leo Holguin y Reyes Jeremy
export default function App() {
  const [vista, setVista] = useState('incidencias');

  return (
    <div>
      <nav>
        <button onClick={() => setVista('incidencias')}>Incidencias</button>
        <button onClick={() => setVista('comerciantes')}>Comerciantes</button>
        <button onClick={() => setVista('notificaciones')}>Notificaciones</button>
      </nav>
      <main>
        {vista === 'incidencias' && <IncidenciasPage />}
        {vista === 'comerciantes' && <ComerciantePages />}
        {vista === 'notificaciones' && <NotificacionesPages />}  
      </main>
    </div>
  );
}

