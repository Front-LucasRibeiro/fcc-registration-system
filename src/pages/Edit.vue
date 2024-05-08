<script setup lang="ts">
import { onMounted, computed } from 'vue';
import FormClient from '../components/FormClient.vue';
import { GET_CLIENTBYID_ACTION } from '../store/type-actions';
import { useRoute } from 'vue-router';
import { useStore } from '../store';

const route = useRoute()
const clientId = computed(() => route.params.id);
const client = computed(() => store.state.clientModule.clientToEdit);
const store = useStore()

const getDataClientById = () => {
  store.dispatch(GET_CLIENTBYID_ACTION, clientId.value)
}

onMounted(() => {
  getDataClientById()
})

</script>


<template>
  <FormClient :client-to-edit="client" type-save="edit" />
</template>
