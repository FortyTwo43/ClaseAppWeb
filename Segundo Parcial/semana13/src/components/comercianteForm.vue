<!-- Hecho por Leo Holguín Chávez -->
 
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import type { Comerciante } from '../types/IComerciante'

const props = defineProps<{
  initialData?: Comerciante
}>()

const emit = defineEmits<{
  (e: 'submit', data: Partial<Comerciante>): void
}>()

const formData = ref<Partial<Comerciante>>({
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  habilitado: true,
})

// Actualiza el formulario si initialData cambia
watch(
  () => props.initialData,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = {
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        habilitado: true,
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
    <h2>{{ props.initialData ? 'Editar' : 'Crear' }} Comerciante</h2>
    <input name="nombre" v-model="formData.nombre" placeholder="Nombre" required />
    <input name="email" v-model="formData.email" placeholder="Email" required />
    <input name="telefono" v-model="formData.telefono" placeholder="Teléfono" required />
    <input name="direccion" v-model="formData.direccion" placeholder="Dirección" required />
    <button type="submit">Guardar</button>
  </form>
</template>