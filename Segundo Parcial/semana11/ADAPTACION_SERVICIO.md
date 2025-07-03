# Adaptación del Servicio de Angular a React

## Principales diferencias entre Angular y React

### Angular (Servicio original)
- Usa `HttpClient` y `Observable` (RxJS)
- Servicios como singletons con `@Injectable`
- Manejo de estado con servicios
- Subscripciones a observables

### React (Adaptación)
- Usa cliente de Supabase directamente con `async/await`
- Funciones exportadas y hooks personalizados
- Manejo de estado con hooks (`useState`, `useEffect`)
- Promesas en lugar de observables

## Estructura del servicio adaptado

### 1. Configuración base
```typescript
// Usa variables de environment de forma similar a Angular
const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
```

### 2. Métodos CRUD genéricos
- `getAll<T>(table: string)` - Obtener todos los registros
- `getById<T>(table: string, id)` - Obtener por ID
- `insert<T>(table: string, data)` - Insertar nuevo registro
- `update<T>(table: string, id, data)` - Actualizar registro
- `deleteRecord(table: string, id)` - Eliminar registro
- `query<T>(table, filters, select)` - Consultas personalizadas

### 3. Hooks personalizados para React
- `useGetAll<T>(table)` - Hook para obtener todos los datos
- `useGetById<T>(table, id)` - Hook para obtener por ID
- `useSupabaseCRUD<T>(table)` - Hook para operaciones CRUD

## Cómo usar en componentes React

### Obtener datos
```typescript
const { data, loading, error, refetch } = useGetAll<Producto>('producto');
```

### Operaciones CRUD
```typescript
const { create, updateRecord, deleteRecord, loading, error } = useSupabaseCRUD<Producto>('producto');

// Crear
const newProduct = await create({ nombre: 'Producto', precio: 100 });

// Actualizar
const updated = await updateRecord(id, { precio: 150 });

// Eliminar
const success = await deleteRecord(id);
```

### Uso directo de funciones (sin hooks)
```typescript
import * as db from '../data/basedatos';

// En un evento o función
const products = await db.getAll<Producto>('producto');
const product = await db.getById<Producto>('producto', 1);
```

## Ventajas de esta adaptación

1. **Más directo**: No necesita subscripciones como Angular
2. **Integración nativa**: Usa el cliente oficial de Supabase
3. **TypeScript**: Mantiene el tipado fuerte
4. **Hooks personalizados**: Manejo automático de loading y errores
5. **Reutilizable**: Métodos genéricos para cualquier tabla
6. **Familiar**: API similar al servicio de Angular original

## Comparación de sintaxis

### Angular
```typescript
// En el componente
constructor(private supabaseService: SupabaseService) {}

ngOnInit() {
  this.supabaseService.getAll('producto').subscribe({
    next: (data) => this.productos = data,
    error: (error) => console.error(error)
  });
}
```

### React
```typescript
// En el componente
const { data: productos, loading, error } = useGetAll<Producto>('producto');

// O directamente
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await db.getAll<Producto>('producto');
      setProductos(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);
```

## Manejo de errores

La adaptación incluye manejo de errores mejorado:
- Los hooks manejan automáticamente los estados de error
- Las funciones directas lanzan excepciones que puedes capturar
- Logs detallados en consola para debugging
