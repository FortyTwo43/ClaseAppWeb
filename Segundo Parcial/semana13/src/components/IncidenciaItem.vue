<!-- Hecho por Neysser Delgado Meza -->
<template>
    <div class="incidencia-item">
        <h1> ID: {{ props.incidencia.id_incidencia }}</h1>
        <h1> Descripcion: {{ props.incidencia.descripcion }}</h1>
        <h1> Estado: {{ props.incidencia.estado }} </h1>
        <h1> Fecha: {{ props.incidencia.fecha }} </h1>
        <h1> ID Comerciante: {{ props.incidencia.id_comerciante }} </h1>
        <div>
            <button @click="eliminar(props.incidencia.id_incidencia)">Eliminar</button>
            <button @click="editar(props.incidencia)">Editar</button>   
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Incidencia } from '../types/incidencia'; 

const props = defineProps<{
  incidencia: Incidencia;
}>();

const emit = defineEmits<{
  "eliminar": [idInciencia: number];
  "editar": [incidencia: Incidencia]
}>();

function eliminar(idInciencia: number) {
  emit("eliminar", idInciencia)
}

function editar(incidencia: Incidencia) {
  emit("editar", incidencia)
}

</script>

<style scoped>
.incidencia-item {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

h1 {
    margin: 5px 0;
    font-size: 16px;
    color: #333;
    font-weight: normal;
    line-height: 1.5;
}

</style>