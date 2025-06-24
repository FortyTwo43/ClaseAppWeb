interface IPelicula {
    id: number;
    nombre: string;
    descripcion: string;
    url: string;
}

interface IPeliculaProps{
    nombre: string;
    url: string;
}

// los parametros que se le pansan a un componente es una interfaz props
const Pelicula = ({nombre, url} : IPeliculaProps) => {
    // esta desestructurado en nombre y url, en lugar de hacerlo con (parametro: IPeliculaProps)
    return (
        <div className="pelicula">
            <h1 style={{backgroundColor: "red"}}>{nombre}</h1>
            <img style={{width: "100px", height: "100px"}} src={url} alt="imagen"/>
        </div>
    );
};

export default Pelicula;
export type { IPelicula, IPeliculaProps };
// export default Pelicula; // si no se exporta, no se puede usar en otro lado
// export type { IPelicula, IPeliculaProps }; // si no se exporta, no se puede usar en otro lado