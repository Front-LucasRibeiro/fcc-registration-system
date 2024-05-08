<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../store';
import { FILTER_CLIENT_ACTION } from '../store/type-actions';
import IClient from '../types/IClient';

const store = useStore();
const clientsDataList = computed(() => store.state.clientModule.clients);

const handleFilter = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
  const filtered = clientsDataList.value.map((client: IClient) => {
    return {
      ...client,
      exibeItem: client.nome.toLowerCase().includes(inputValue) || client.cpf.toLowerCase().includes(inputValue) ? true : false
    };
  });

  store.dispatch(FILTER_CLIENT_ACTION, filtered)
};

</script>

<template>
  <div class="filter">
    <label for="filter">Filtrar por Nome ou CPF:</label>
    <input 
      type="text" 
      class="filter__field" 
      id="filter" 
      placeholder="filtrar..." 
      @keyup="handleFilter"
    />
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
