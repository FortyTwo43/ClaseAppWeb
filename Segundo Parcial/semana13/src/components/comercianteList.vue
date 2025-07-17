<!-- Hecho por Leo Holguín Chávez -->

<script setup lang="ts">
import type { Comerciante } from "../types/IComerciante";
import comercianteCard from "./comercianteCard.vue"

const props = defineProps<{
  comerciantes: Comerciante[]
}>()

const emit = defineEmits<{
  (e: 'edit', comerciante: Comerciante): void
  (e: 'delete', id: number): void
}>()

function handleEdit(comerciante: Comerciante) {
  emit('edit', comerciante)
}

function handleDelete(id: number) {
  emit('delete', id)
}
</script>

<template>
  <div>
    <comercianteCard
      v-for="comerciante in comerciantes"
      :key="comerciante.id_comerciante"
      :comerciante="comerciante"
      @edit="handleEdit"
      @delete="handleDelete"
    />
  </div>
</template>