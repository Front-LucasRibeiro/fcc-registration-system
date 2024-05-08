<script setup lang="ts">
import { useStore } from '../store';
import { computed, onMounted } from 'vue';
import { GET_CLIENTS_ACTION } from '../store/type-actions';
import Filter from '../components/Filter.vue';
import router from '../routes';
import { DELETE_CLIENT_ACTION } from '../store/type-actions';

const store = useStore()
const clientsDataList = computed(() => store.state.clientModule.clients);

const editClient = (clienteId: number) => {
  router.push(`/clientes/editar/${clienteId}`)
}

const deleteClient = (clienteId: number) => {
  store.dispatch(DELETE_CLIENT_ACTION, clienteId)
}

onMounted(() => {
  store.dispatch(GET_CLIENTS_ACTION)
})

</script>

<template>
  <section class="list container">

    <h1 class="title">Tabela de Clientes</h1>

    <Filter />

    <div class="list__tableWrap">
      <table class="list__table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Data de Nascimento</th>
            <th>Sexo</th>
            <th>Estado Civil</th>
            <th>Editar</th>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody v-for="client in clientsDataList" :key="client.idClient">
          <tr v-if="client?.exibeItem || !client.hasOwnProperty('exibeItem')">
            <td>{{ client.nome }}</td>
            <td>{{ client.cpf }}</td>
            <td>{{ client.rg }}</td>
            <td>{{ client.dataNascimento }}</td>
            <td>{{ client.sexo }}</td>
            <td>{{ client.estadoCivil }}</td>
            <td>
              <button class="button" @click="editClient(client.clienteId)">Editar</button>
            </td>
            <td>
              <button class="button" @click="deleteClient(client.clienteId)">Deletar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/scss/variables' as var;
@import './src/assets/scss/mixins';

@include title(#666);
@include button(var.$main-color, var.$main-color-hover, var.$sec-color);

.button {
  height: 36px;
  padding: 0 8px;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px auto;

  &__tableWrap {
    max-width: 1200px;
    width: 100%;
    margin: 22px auto 0;
    overflow-x: auto;
  }

  &__table {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 22px;
    border-collapse: collapse;
    margin: 0 auto;
    width: 100%;


    thead {
      background-color: #ddd;
    }

    th {
      font-weight: bold;
      padding: 8px 12px;
      font-size: 0.875rem;
    }

    td {
      padding: 12px;
      font-size: 0.95rem;

      a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    td,
    th {
      text-align: center;
      border: 1px solid #ddd;
      vertical-align: middle;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
