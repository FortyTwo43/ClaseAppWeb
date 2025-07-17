<!-- Hecho por Neysser Delgado Meza-->
 
<script setup lang="ts">
import { ref, watch} from 'vue'
import type {Incidencia} from '../types/incidencia';

const props = defineProps<{
  incidencias?: Incidencia
}>()

const emit = defineEmits<{
  (e: 'submit', data: Partial<Incidencia>): void
}>()

const formData = ref<Partial<Incidencia>>({
  descripcion: '',
  fecha: '',
  estado: '',
  id_comerciante: 0,
})

// Actualiza el formulario si incidencias cambia
watch(
  () => props.incidencias,
  (nuevoValor) => {
    if (nuevoValor) {
      formData.value = { ...nuevoValor }
    } else {
      formData.value = {
        descripcion: '',
        fecha: '',
        estado: '',
        id_comerciante: 0,
      }
    }
  },
  { immediate: true }
)

function handleSubmit() {
  emit('submit', { ...formData.value })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h2>{{ props.incidencias ? 'Editar' : 'Crear' }} Incidencias</h2>
    <input name="descripcion" v-model="formData.descripcion" placeholder="Descripcion" required />
    <input name="fecha" v-model="formData.fecha" placeholder="Fecha" required />
    <input name="estado" v-model="formData.estado" placeholder="Estado" required />
    <input name="id_comerciante" v-model="formData.id_comerciante" placeholder="id_comerciante" required />
    <button type="submit">Guardar</button>
  </form>
</template>