<script setup lang="ts">
import { useStore } from 'vuex';
import { key } from '../store/index';
import { computed } from 'vue';

const store = useStore(key)
const clients = computed(() => store.state.clients);

</script>

<template>
  clientes content

  <div>{{ clients }}</div>

</template>

<style scoped></style>
