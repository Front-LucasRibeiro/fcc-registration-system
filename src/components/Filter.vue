<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <div class="filter">
    <label for="filter">Filtrar por Nome ou CPF:</label>
    <input type="text" class="filter__field" id="filter" placeholder="filtrar..." />
  </div>
</template>

<style scoped lang="scss">
.filter {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-top: 22px;

  label{
    font-weight: bold;
    margin-bottom: 6px;
  }

  &__field {
    height: 42px;
    border-radius: 6px;
    outline: 0;
    border: 1px solid #ccc;
    font-size: 0.875rem;
    padding: 4px 14px;
  }
}
</style>
