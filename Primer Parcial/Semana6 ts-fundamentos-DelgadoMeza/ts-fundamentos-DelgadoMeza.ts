// PASO 1
let nombreEstablecimiento: string = "Panaderia La Alegria";
let nombreComerciante: string = "Juan";
let horario: string = "10:00-15:00";
let precioPorducto: number = 10.00;
let nombreCliente: string = "Santiago"

// PASO 2

//ESTAS SON LAS INTERFACES ORIGINALES, PERO SE CAMBIARON LAS INTERFACES PARA CUMPLIR CON EL PASO 6 DEL EJERCICIO
// POR ESO QUEDAN COMENTADAS

// interface IEstablecimiento{
//   id_establecimiento: number;
//   nombre: string;
//   direccion: string;
//   horario: string;
//   id_inventario: number; 
//   id_comerciante: number;
// }

// interface IProducto{
//   id_producto: number;
//   nombre: string;
//   descripcion: string;
//   precio: number;
//   stock: number;
// }

// interface IInventario{
//   id_inventario: number;
//   fecha_actualizacion: string;
//   cantidad_total: number;
//   valor_inventario: number;
//   productos: IProducto[]
// }


// ESTAS SON LAS INTERFACES QUE SE CREARON PARA CUMPLIR CON EL PASO 6 DEL EJERCICIO
interface IEstablecimiento {
    readonly id_establecimiento: number;
    nombre: string;
    direccion: string;
    horario: string;
    readonly id_inventario: number;
    id_comerciante: string | number;  // union type: puede ser número o string
}

interface IProducto {
    readonly id_producto: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    stock: number;

}

interface IInventario {
    readonly id_inventario: number;
    fecha_actualizacion: string;
    cantidad_total: number;
    valor_inventario: number;
    productos: IProducto[];
}

//PASO 3
class Establecimiento implements IEstablecimiento{
  id_establecimiento: number;
  nombre: string;
  direccion: string;
  horario: string;
  id_inventario: number; 
  id_comerciante: number;

  constructor(id:number, nombre:string, direccion:string, horario:string, id_inventario:number, id_comerciante:number){
    this.id_establecimiento = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.horario = horario;
    this.id_inventario = id_inventario;
    this.id_comerciante = id_comerciante;
  }

  public esNombreValido():boolean {
    if(this.nombre==""){
      return false;
    }else{
      return true;
    }
  }
}

class Producto implements IProducto{
  id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;

  constructor(id:number, nombre:string, descripcion:string, precio:number, stock:number){
    this.id_producto = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }

  public hayStock():boolean {
    if (this.stock > 0){
      return true;

    }else{

      return false;
    }
  }
}

class Inventario implements IInventario{
  id_inventario: number;
  fecha_actualizacion: string;
  cantidad_total: number;
  valor_inventario: number;
  productos: IProducto[]; 

  constructor(id:number, fecha:string, cantidad:number, valor:number, productos:IProducto[]){
    this.id_inventario = id;
    this.fecha_actualizacion = fecha;
    this.cantidad_total = cantidad;
    this.valor_inventario = valor;
    this.productos = productos;
  }

  public hayProductos():boolean {
    if (this.productos.length > 0){
      return true;

    }else{

      return false;
    }
  }
}

// PASO 3
let establecimiento1 = new Establecimiento(1, "Panaderia La Alegria", "Calle Falsa 123", "10:00-15:00", 1, 1);
let establecimiento2 = new Establecimiento(2, "Supermercado El Buen Precio", "Avenida Siempre Viva 456", "08:00-20:00", 2, 2);
let establecimiento3 = new Establecimiento(3, "Farmacia Salud y Vida", "Calle Real 789", "09:00-18:00", 3, 3);
let establecimiento4 = new Establecimiento(4, "Libreria El Saber", "Calle del Conocimiento 321", "08:00-19:00", 4, 4);
let establecimiento5 = new Establecimiento(5, "Ferreteria Todo en Uno", "Avenida de la Construccion 654", "07:00-17:00", 5, 5);
let establecimiento6 = new Establecimiento(6, "Restaurante Sabores del Mundo", "Calle Gourmet 987", "11:00-23:00", 6, 6);
let establecimiento7 = new Establecimiento(7, "Zapateria Pasos Firmes", "Calle del Calzado 159", "10:00-20:00", 7, 7);
let establecimiento8 = new Establecimiento(8, "Jugueteria Sonrisas", "Avenida de los Juguetes 753", "09:00-19:00", 8, 8);
let establecimiento9 = new Establecimiento(9, "Boutique Elegancia", "Calle de la Moda 852", "10:00-18:00", 9, 9);
let establecimiento10 = new Establecimiento(10, "Panaderia Dulces Momentos", "Calle del Pan 369", "06:00-14:00", 10, 10);

let producto1 = new Producto(1, "Pan", "Pan fresco de trigo", 0.50, 100);
let producto2 = new Producto(2, "Leche", "Leche entera pasteurizada", 1.20, 50);
let producto3 = new Producto(3, "Arroz", "Arroz de grano largo", 0.80, 200);
let producto4 = new Producto(4, "Carne", "Carne de res molida", 5.00, 30);
let producto5 = new Producto(5, "Verduras", "Mezcla de verduras frescas", 2.00, 150);
let producto6 = new Producto(6, "Frutas", "Frutas de temporada", 1.50, 80);
let producto7 = new Producto(7, "Pescado", "Filete de pescado fresco", 6.00, 20);
let producto8 = new Producto(8, "Huevos", "Docena de huevos frescos", 2.50, 60);
let producto9 = new Producto(9, "Queso", "Queso madurado", 3.00, 40);
let producto10 = new Producto(10, "Yogur", "Yogur natural", 1.00, 70);

let inventario1 = new Inventario(1, "2023-10-01", 1000, 5000, [producto1, producto2, producto3]);
let inventario2 = new Inventario(2, "2023-10-02", 800, 4000, [producto4, producto5, producto6]);
let inventario3 = new Inventario(3, "2023-10-03", 600, 3000, [producto7, producto8, producto9, producto10]);
let inventario4 = new Inventario(4, "2023-10-04", 700, 3500, [producto1, producto2, producto3, producto4]);
let inventario5 = new Inventario(5, "2023-10-05", 900, 4500, [producto5, producto6, producto7, producto8]);
let inventario6 = new Inventario(6, "2023-10-06", 500, 2500, [producto9, producto10, producto1]);
let inventario7 = new Inventario(7, "2023-10-07", 400, 2000, [producto2, producto3, producto4]);
let inventario8 = new Inventario(8, "2023-10-08", 300, 1500, [producto5, producto6, producto7]);
let inventario9 = new Inventario(9, "2023-10-09", 200, 1000, [producto8, producto9, producto10]);
let inventario10 = new Inventario(10, "2023-10-10", 100, 500, [producto1, producto2, producto3, producto4, producto5]);

// PASO 4
const productos: Producto[] = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10];
const establecimientos: Establecimiento[] = [establecimiento1, establecimiento2, establecimiento3, establecimiento4, establecimiento5, establecimiento6, establecimiento7, establecimiento8, establecimiento9, establecimiento10];
const inventarios: Inventario[] = [inventario1, inventario2, inventario3, inventario4, inventario5, inventario6, inventario7, inventario8, inventario9, inventario10];

// PASO 5
// Mostrar los productos
function mostrarProductos(productos: Producto[]): void {
  productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
  });
}

// Filtrar inventarios con productos en stock
function filtrarInventariosConStock(inventarios: Inventario[]){
  for (let inventario of inventarios) {
    if(inventario.hayProductos()==true){
      console.log(`Inventario ID: ${inventario.id_inventario}, Fecha: ${inventario.fecha_actualizacion}, Cantidad Total: ${inventario.cantidad_total}, Valor Inventario: $${inventario.valor_inventario}`);
    }
  }
}

// Agregar inventerio
function agregarInventario(inventarios: Inventario[], nuevoInventario: Inventario): void {
  inventarios.push(nuevoInventario);
  console.log(`Nuevo inventario agregado: ID ${nuevoInventario.id_inventario}, Fecha: ${nuevoInventario.fecha_actualizacion}`);
}

// Eliminar inventario
function eliminarInventario(inventarios: Inventario[], idInventarioEliminar: number): Inventario[]{
  return inventarios.filter(inventario => inventario.id_inventario != idInventarioEliminar);
}

console.log("PASO 5");
mostrarProductos(productos);
filtrarInventariosConStock(inventarios);
console.log("Inventarios con productos en stock:");
filtrarInventariosConStock(inventarios);
console.log("Agregando nuevo inventario...");
let nuevoInventario = new Inventario(11, "2023-10-11", 300, 1500, [producto1, producto2]);
agregarInventario(inventarios, nuevoInventario);
console.log("Eliminando inventario con ID 1...");
eliminarInventario(inventarios, 1);


// PASO 6

// ESTE PASO ESTÁ HECHO EN EL PASO 2

// PASO 7
// solo nombres de productos en mayuscula

function soloNombreProducto(productos: Producto[]){
  let nombreProductos = productos.map(producto => producto.nombre.toUpperCase());
  return nombreProductos;
}

function mostrarlistaNombre(listaNombre: string[]){
  for(let nombre of listaNombre){
    console.log(nombre);
  }
}
console.log("PASO 7");
mostrarlistaNombre(soloNombreProducto(productos));

// PASO 8
function filtrarProductosStock(productos: Producto[]){
 return productos.filter(producto => producto.stock > 0);
}

console.log("PASO 8");
mostrarProductos(filtrarProductosStock(productos));

// Paso 9

console.log("PASO 9");
const totalPrecio = productos.reduce((acum, prod) => acum + prod.precio, 0);
console.log("Suma total de precios:", totalPrecio);

// PASO 10. Simular relaciones entre entidades
const producto11 = new Producto(1, "Pan", "Pan fresco de trigo", 0.50, 100);
const inventario11 = new Inventario(9, "2023-10-09", 200, 1000, [producto11]);

// PASO 11. Simular operación de negocio
class Pedido{
  id_pedido: number;
  id_establecimiento: number;
  fecha_pedido: string;
  productos: IProducto[];
  total: number;
  cliente: string;

  constructor(id: number, id_establecimiento: number, fecha_pedido: string, productos: IProducto[], total:number, cliente: string) {
    this.id_pedido = id;
    this.id_establecimiento = id_establecimiento;
    this.fecha_pedido = fecha_pedido;
    this.productos = productos;
    this.total = total;
    this.cliente = cliente;
  }
}

function generarResumenPedido(pedido: Pedido): string {
  const resumenProductos = pedido.productos
    .map(producto => `- ${producto.nombre}`)
    .join('\n');

  return `Resumen del Pedido:
  ID del Pedido: ${pedido.id_pedido}
  Establecimiento: ${pedido.id_establecimiento}
  Cliente: ${pedido.cliente}
  Fecha: ${pedido.fecha_pedido}
  Productos:
  ${resumenProductos}
  Total: $${pedido.total.toFixed(2)}`;
}

const Pedido11 = new Pedido(1, establecimiento1.id_establecimiento, "2023-10-10", [producto1, producto2], 10.00, nombreCliente);            
let resumenFactura:string = generarResumenPedido(Pedido11);
console.log("PASO 11");
console.log(resumenFactura);

// PASO 12. Imprimir estructuras anidadas
function imprimirInventario(inventario: Inventario): void {
  console.log(`Inventario ID: ${inventario.id_inventario}`);
  console.log(`Fecha de Actualización: ${inventario.fecha_actualizacion}`);
  console.log(`Cantidad Total: ${inventario.cantidad_total}`);
  console.log(`Valor Total del Inventario: $${inventario.valor_inventario.toFixed(2)}`);

  if (inventario.hayProductos()) {
    console.log(`\nProductos en inventario:`);

    let index = 1;
    for (const producto of inventario.productos) {
      console.log(`  Producto ${index++}:`);
      console.log(`    ID: ${producto.id_producto}`);
      console.log(`    Nombre: ${producto.nombre}`);
      console.log(`    Descripción: ${producto.descripcion}`);
      console.log(`    Precio: $${producto.precio.toFixed(2)}`);
      console.log(`    Stock: ${producto.stock}`);
    }
  } else {
    console.log(`No hay productos en el inventario.`);
  }
}
console.log("PASO 12")
imprimirInventario(inventario1);

