<!-- Fue hecho por: Reyes Jeremy -->
<script setup lang="ts">
import { ref } from 'vue'
import type { Notificacion } from '../types/notificaciones'
import notificacionList from '../components/notificacionList.vue'
import notificacionForm from '../components/notificacionForm.vue'

// Simulación de una "base de datos" local
const notificaciones = ref<Notificacion[]>([
  {
    id_notificacion: 1,
    titulo: 'Notificacion 1',
    mensaje: 'Prueba 1',
    id_comerciante: 1,
    fecha_envio: "hoy"
  },
  {
    id_notificacion: 2,
    titulo: 'Notificacion 1',
    mensaje: 'Prueba 1',
    id_comerciante: 2,
    fecha_envio: "hoy"
  }
])

const editando = ref<Notificacion | null>(null)

const handleCreateOrUpdate = (data: any) => {
  if (data.id_notificacion) {
    // Actualizar
    const idx = notificaciones.value.findIndex(i => i.id_notificacion === data.id_notificacion)
    if (idx !== -1) {
      notificaciones.value[idx] = { ...data }
    }
  } else {
    // Crear
    const nuevo: Notificacion = {
      ...data,
      id_notificacion: (Math.max(0, ...notificaciones.value.map(n => Number(n.id_notificacion))) + 1).toString()
    }
    notificaciones.value.push(nuevo)
  }
  editando.value = null
}

const handleEdit = (notificacion: Notificacion) => {
  editando.value = { ...notificacion }
}

const handleDelete = (id: number) => {
  notificaciones.value = notificaciones.value.filter(c => c.id_notificacion !== id)
}
</script>

<template>
  <div>
    <notificacionForm :initialData="editando || undefined" @submit="handleCreateOrUpdate" />
    <notificacionList
      :notificaciones="notificaciones"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>