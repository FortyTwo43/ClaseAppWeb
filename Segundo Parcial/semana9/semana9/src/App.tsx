import './App.css'
import type { IPelicula } from './components/pelicula';
import Cartelera from './components/cartelera';


const peliculas: IPelicula[] = [
  { id: 1, nombre: "Avatar", descripcion: "Un mundo de fantasía", url: "https://example.com/avatar.jpg" },
  { id: 2, nombre: "Titanic", descripcion: "Una historia de amor trágica", url: "https://example.com/titanic.jpg" },  
  { id: 3, nombre: "Inception", descripcion: "Un viaje a través de los sueños", url: "https://example.com/inception.jpg" },
  { id: 4, nombre: "The Matrix", descripcion: "Una realidad simulada", url: "https://example.com/matrix.jpg" },
  { id: 5, nombre: "Interstellar", descripcion: "Un viaje a través del espacio y el tiempo", url: "https://example.com/interstellar.jpg" },
]

function App() {

  return (
    <>
      <Cartelera key={1} peliculas={peliculas}
      ></Cartelera>
    </>
  );
};

export default App
