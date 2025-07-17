<!-- Hecho por Neysser Delgado Meza -->
<template>
    <div>
        <IncidenciaForm :incidencias="editando || undefined" @submit="handleCreateOrUpdate" />
        <IncidenciaLista 
        :incidencias="incidencias" 
        @eliminar="eliminar" 
        @editar="editar" />
    </div>
</template>

<script setup lang="ts">
import type { Incidencia } from '../types/incidencia';
import IncidenciaLista from '../components/IncidenciaLista.vue';
import IncidenciaForm from '../components/IncidenciaForm.vue';
import { ref } from 'vue';

const incidencias = ref<Incidencia[]>([
    {
        id_incidencia: 1,
        descripcion: 'Incidencia de prueba',
        estado: 'Pendiente',
        fecha: '2023-10-01',
        id_comerciante: 123
    },
    {
        id_incidencia: 2,
        descripcion: 'Otra incidencia de prueba',
        estado: 'Resuelta',
        fecha: '2023-10-02',
        id_comerciante: 456
    },
    {
        id_incidencia: 3,
        descripcion: 'Tercera incidencia de prueba',
        estado: 'En Proceso',
        fecha: '2023-10-03',
        id_comerciante: 789
    }
]);

const editando = ref<Incidencia | null> (null)

const handleCreateOrUpdate = (incidencia: any) => {
  if (incidencia.id_incidencia) {
    // Actualizar
    const idx = incidencias.value.findIndex(i => i.id_incidencia === incidencia.id_incidencia)
    if (idx !== -1) {
      incidencias.value[idx] = { ...incidencia }
    }
  } else {
    // Crear
    const nuevaIncidencia: Incidencia = {
      ...incidencia,
      id_incidencia: (Math.max(0, ...incidencias.value.map(i => Number(i.id_incidencia))) + 1).toString()
    }
    incidencias.value.push(nuevaIncidencia)
  }
  editando.value = null
}

const editar = (incidencia: Incidencia) => {
  editando.value = { ...incidencia }
}

const eliminar = (id: number) => {
  incidencias.value = incidencias.value.filter(i => i.id_incidencia !== id)
}
</script>

<style scoped>

</style>