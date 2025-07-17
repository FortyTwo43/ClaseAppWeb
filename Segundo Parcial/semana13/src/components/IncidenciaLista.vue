<!-- Hecho por Neysser Delgado Meza -->
<template>
    <div class="incidencia-lista">
        <h1>Lista de Incidencias</h1>
        <div>
            <IncidenciaItem v-for="incidencia in props.incidencias"
                :key="incidencia.id_incidencia"
                :incidencia="incidencia" 
                @eliminar="eliminar" 
                @editar="editar"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Incidencia } from '../types/incidencia';
import IncidenciaItem from './IncidenciaItem.vue';

const props = defineProps<{
  incidencias: Incidencia[];
}>();

const emit = defineEmits<{
    "eliminar" : [idInciencia: number];
    "editar": [incidencia: Incidencia]
}>();

function eliminar(idInciencia: number) {
  emit("eliminar", idInciencia);
}

function editar(incidencia: Incidencia) {
  emit("editar", incidencia);
}

</script>

<style scoped>
.incidencia-lista {
    padding: 20px;
    background-color: #f9f9f9;
}
</style>