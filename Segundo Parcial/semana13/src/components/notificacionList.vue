<!-- Fue hecho por: Reyes Jeremy -->
<script setup lang="ts">
import type { Notificacion } from "../types/notificaciones"
import notificacionesCard from "./notificacionesCard.vue"

const props = defineProps<{
  notificaciones: Notificacion[]
}>()

const emit = defineEmits<{
  (e: 'edit', notificacion: Notificacion): void
  (e: 'delete', id: number): void
}>()

function handleEdit(notificacion: Notificacion) {
  emit('edit', notificacion)
}

function handleDelete(id: number) {
  emit('delete', id)
}
</script>

<template>
  <div>
    <notificacionesCard
      v-for="notificacion in notificaciones"
      :key="notificacion.id_notificacion"
      :notificacion="notificacion"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>