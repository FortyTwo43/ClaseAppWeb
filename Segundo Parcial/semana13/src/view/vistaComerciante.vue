<!-- Hecho por Leo Holguín Chávez -->

<script setup lang="ts">
import { ref } from 'vue'
import type { Comerciante } from '../types/IComerciante'
import comercianteList from '../components/comercianteList.vue'
import comercianteForm from '../components/comercianteForm.vue'

// Simulación de una "base de datos" local
const comerciantes = ref<Comerciante[]>([
  {
    id_comerciante: 1,
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    telefono: '555-1234',
    direccion: 'Calle Falsa 123',
    habilitado: true
  },
  {
    id_comerciante: 2,
    nombre: 'Ana López',
    email: 'ana@example.com',
    telefono: '555-5678',
    direccion: 'Avenida Siempre Viva 742',
    habilitado: false
  }
])

const editando = ref<Comerciante | null>(null)

const handleCreateOrUpdate = (data: any) => {
  if (data.id_comerciante) {
    // Actualizar
    const idx = comerciantes.value.findIndex(c => c.id_comerciante === data.id_comerciante)
    if (idx !== -1) {
      comerciantes.value[idx] = { ...data }
    }
  } else {
    // Crear
    const nuevo: Comerciante = {
      ...data,
      id_comerciante: (Math.max(0, ...comerciantes.value.map(c => Number(c.id_comerciante))) + 1).toString()
    }
    comerciantes.value.push(nuevo)
  }
  editando.value = null
}

const handleEdit = (comerciante: Comerciante) => {
  editando.value = { ...comerciante }
}

const handleDelete = (id: number) => {
  comerciantes.value = comerciantes.value.filter(c => c.id_comerciante !== id)
}
</script>

<template>
  <div>
    <comercianteForm :initialData="editando || undefined" @submit="handleCreateOrUpdate" />
    <comercianteList
      :comerciantes="comerciantes"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>