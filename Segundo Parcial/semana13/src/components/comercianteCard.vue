<!-- hecho por leo holguin chavez -->

<script setup lang="ts">
import type { Comerciante } from "../types/IComerciante"
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  comerciante: Comerciante
}>()

const emit = defineEmits<{
  (e: 'edit', comerciante: Comerciante): void
  (e: 'delete', id: number): void
}>()

function onEdit() {
  emit('edit', props.comerciante)
}

function onDelete() {
  emit('delete', props.comerciante.id_comerciante)
}
</script>

<template>
  <div class="comerciante">
    <h3>Comerciante #{{ props.comerciante.id_comerciante }}</h3>
    <p><strong>Nombre:</strong> {{ props.comerciante.nombre }}</p>
    <p><strong>Email:</strong> {{ props.comerciante.email }}</p>
    <p><strong>Teléfono:</strong> {{ props.comerciante.telefono }}</p>
    <p><strong>Dirección:</strong> {{ props.comerciante.direccion }}</p>
    <p><strong>Habilitado:</strong> {{ props.comerciante.habilitado }}</p>
    <button @click="onEdit">Editar</button>
    <button @click="onDelete">Eliminar</button>
  </div>
</template>

<style scoped>
.comerciante {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background:rgb(146, 10, 219);
  
}
button {
  margin-right: 8px;
}
</style>