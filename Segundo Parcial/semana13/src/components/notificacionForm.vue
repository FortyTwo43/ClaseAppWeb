<!-- Fue hecho por: Reyes Jeremy -->
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import type { Notificacion } from '../types/notificaciones'

const props = defineProps<{
  initialData?: Notificacion
}>()

const emit = defineEmits<{
  (e: 'submit', data: Partial<Notificacion>): Notificacion
}>()

const formData = ref<Partial<Notificacion>>({
  titulo: '',
  mensaje: '',
  fecha_envio: '',
  id_comerciante: 0,
})

// Actualiza el formulario si initialData cambia
watch(
  () => props.initialData,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        titulo: '',
        mensaje: '',
        fecha_envio: '',
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
    <h2>{{ props.initialData ? 'Editar' : 'Crear' }} Notificaiones</h2>
    <input name="title" v-model="formData.titulo" placeholder="title" required />
    <input name="message" v-model="formData.mensaje" placeholder="message" required />
    <input name="fecha_envio" v-model="formData.fecha_envio" placeholder="fecha de envío" required />
    <input name="id_comerciante" v-model="formData.id_comerciante" placeholder="id_comerciante" required />
    <button type="submit">Guardar</button>
  </form>
</template>