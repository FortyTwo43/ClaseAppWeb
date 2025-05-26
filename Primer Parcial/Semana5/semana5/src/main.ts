import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1> Hola Mundo </h1>
`

interface ICliente{
  id: number;
  cedula: string;
  nombre: string;
  facturas?:IFactura[]; // ? el cliente prodia o no tener factua
}

interface IFactura{
  id: number;
  codigo:string;
  cliente: ICliente;
  total:number;
  fecha: Date;
  detalles: IDetalleFactura[];
}

interface IProducto{
  id:number;
  nombre: string;
  precio: number;
  stock: number;
  detalles?: IDetalleFactura[];
}

interface IDetalleFactura{
  id: number;
  factura?: IFactura;
  producto: IProducto;
  cantidad: number;
  precio: number;
}

const factura1: IFactura = {
  id: 1,
  codigo: "F001",
  cliente: {
    id: 1,
    cedula: "1234567890",
    nombre: "Juan Perez"
  },
  total: 100,
  fecha: new Date(),
  detalles: [
    {
      id: 1,
      producto: {
        id: 1,
        nombre: "Producto A",
        precio: 50,
        stock: 10
      },
      cantidad: 2,
      precio: 50
    },
    {
      id: 2,
      producto: {
        id: 2,
        nombre: "Porducto B",
        precio: 40,
        stock: 42,
      },
      cantidad: 4,
      precio: 100
    }
  ]
}

function generarFacturaHTML(factura: IFactura): string{
  let html: string = ``;
  html += `<h1> ${factura.codigo} </h1>`;
  html += `<p> Cliente: ${factura.cliente.nombre} </p> `;
  html += `<p> Total: ${factura.total} </p>`;
  html += `<p> Fecha: ${factura.fecha}</p>`;
  html += `<p> Detalles: </p>`;
  factura.detalles?.forEach(detalle => {
    html += `<p> ${detalle.producto.nombre} </p>`;
  });
  return html;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
${generarFacturaHTML(factura1)}
`


// FORMA 1
// Creando cada elemento usando el DOM y agregandolo a un div que sirve de contenedor

function generarFactura(factura: IFactura): HTMLDivElement{
  const contenedor:HTMLDivElement = document.createElement("div"); 

  const titulo = document.createElement("h1");
  titulo.textContent = `FACTURA #${factura.codigo}`;
  contenedor.appendChild(titulo);

  const cliente = document.createElement("p");
  cliente.textContent = `Cliente: ${factura.cliente.nombre}`;
  contenedor.appendChild(cliente);

  const total = document.createElement("p");
  total.textContent = `Total: ${factura.total}`;
  contenedor.appendChild(total);

  const fecha = document.createElement("p");
  fecha.textContent = `Fecha: ${factura.fecha}`;
  contenedor.appendChild(fecha);

  const tituloDetalles = document.createElement("p");
  tituloDetalles.textContent = `Detalles:`;
  contenedor.appendChild(tituloDetalles);


  factura.detalles.forEach(detalle =>{
    const producto = document.createElement("p");
    producto.textContent = detalle.producto.nombre;
    contenedor.appendChild(producto);
  })

  return contenedor
}


function mostrarFactura(contenedor: HTMLDivElement):void{
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = ``;
  document.querySelector<HTMLDivElement>("#app")!.appendChild(contenedor);
}

// mostrarFactura(generarFactura(factura1));

// FORMA 2
// Usando .map() y .join() para crear un string con etiquetas <p> con los detalles de la compras
// luego se retorna una string con todo el html y el string de los detalles de compra
function generarFacturaConMap(factura: IFactura): string{
  const detallesHTML = factura.detalles?.map(detalle => `<p>${detalle.producto.nombre}</p>`).join(" ") || " ";

  return `
    <h1>FACTURA #${factura.codigo}</h1>
    <p>Cliente: ${factura.cliente.nombre}</p>
    <p>Total: ${factura.total}</p>
    <p>Fecha: ${factura.fecha}</p>  
    <p>Detalles:</p>
    ${detallesHTML}
  `
}

function mostrarFacturaConMap(facturaHTML: string): void{
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `${facturaHTML}`;
}

// mostrarFacturaConMap(generarFacturaConMap(factura1));
