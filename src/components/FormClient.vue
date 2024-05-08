<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { SAVE_EDITION_ACTION, ADD_CLIENT_ACTION } from '../store/type-actions';
import { store } from '../store';

const props = defineProps({
  id: String,
  typeSave: String,
  clientToEdit: Object
})

const formData = ref({
  clienteId: '',
  cpf: '',
  nome: '',
  rg: '',
  dataExpedicao: '',
  orgaoExpedicao: '',
  uf: '',
  dataNascimento: '',
  sexo: '',
  estadoCivil: '',
  endereco: {
    enderecoId: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  }
});

watchEffect(() => {
  formData.value = {
    nome: props.clientToEdit?.nome,
    clienteId: props.clientToEdit?.clienteId,
    cpf: props.clientToEdit?.cpf,
    rg: props.clientToEdit?.rg,
    dataExpedicao: props.clientToEdit?.dataExpedicao,
    orgaoExpedicao: props.clientToEdit?.orgaoExpedicao,
    uf: props.clientToEdit?.uf,
    dataNascimento: props.clientToEdit?.dataNascimento,
    sexo: props.clientToEdit?.sexo,
    estadoCivil: props.clientToEdit?.estadoCivil,
    endereco: {
      enderecoId: props.clientToEdit?.endereco?.enderecoId,
      cep: props.clientToEdit?.endereco?.cep,
      logradouro: props.clientToEdit?.endereco?.logradouro,
      numero: props.clientToEdit?.endereco?.numero,
      complemento: props.clientToEdit?.endereco?.complemento,
      bairro: props.clientToEdit?.endereco?.bairro,
      cidade: props.clientToEdit?.endereco?.cidade,
      uf: props.clientToEdit?.endereco?.uf
    }
  }
})

const saveClient = () => {

  if (props.typeSave === 'edit') {
    store.dispatch(SAVE_EDITION_ACTION, formData.value)
  } else if ((props.typeSave === 'created')) {
    store.dispatch(ADD_CLIENT_ACTION, formData.value)
  }
}

</script>

<template>
  <section class="edit container">

    <h1 class="title">Edição de Clientes</h1>

    <form @submit.prevent="saveClient">
      <section class="edit__sectionForm">
        <h2 class="subTitle">Dados pessoais:</h2>

        <div class="edit__form">
          <fieldset>
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="formData.nome" />
          </fieldset>
          <fieldset>
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" v-model="formData.cpf" />
          </fieldset>
          <fieldset>
            <label for="rg">RG:</label>
            <input type="text" id="rg" v-model="formData.rg" />
          </fieldset>
          <fieldset>
            <label for="issueDate">Data Expedição:</label>
            <input type="text" id="issueDate" v-model="formData.dataExpedicao" />
          </fieldset>
          <fieldset>
            <label for="issuingAuthority">Órgão Expedição:</label>
            <input type="text" id="issuingAuthority" v-model="formData.orgaoExpedicao" />
          </fieldset>
          <fieldset>
            <label for="uf">UF:</label>
            <input type="text" id="uf" v-model="formData.uf" />
          </fieldset>
          <fieldset>
            <label for="birthDate">Data de Nascimento:</label>
            <input type="text" id="birthDate" v-model="formData.dataNascimento" />
          </fieldset>
          <fieldset>
            <label for="gender">Sexo:</label>
            <input type="text" id="gender" v-model="formData.sexo" />
          </fieldset>
          <fieldset>
            <label for="maritalStatus">Estado Civil :</label>
            <input type="text" id="maritalStatus" v-model="formData.estadoCivil" />
          </fieldset>
        </div>
      </section>

      <section class="edit__sectionForm">
        <h2 class="subTitle">Endereço:</h2>

        <div class="edit__form">
          <fieldset>
            <label for="cep">CEP:</label>
            <input type="text" id="cep" v-model="formData.endereco.cep" />
          </fieldset>
          <fieldset>
            <label for="street">Logradouro :</label>
            <input type="text" id="street" v-model="formData.endereco.logradouro" />
          </fieldset>
          <fieldset>
            <label for="number">Número:</label>
            <input type="text" id="number" v-model="formData.endereco.numero" />
          </fieldset>
          <fieldset>
            <label for="complement">Complemento:</label>
            <input type="text" id="complement" v-model="formData.endereco.complemento" />
          </fieldset>
          <fieldset>
            <label for="neighborhood">Bairro:</label>
            <input type="text" id="neighborhood" v-model="formData.endereco.bairro" />
          </fieldset>
          <fieldset>
            <label for="city">Cidade:</label>
            <input type="text" id="city" v-model="formData.endereco.cidade" />
          </fieldset>
          <fieldset>
            <label for="state">UF:</label>
            <input type="text" id="state" v-model="formData.endereco.uf" />
          </fieldset>
        </div>
      </section>

      <button class="button" type="submit">Salvar</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/scss/variables' as var;
@import './src/assets/scss/mixins';

@include title(#666);
@include button(var.$main-color, var.$main-color-hover, var.$sec-color);

.edit {
  max-width: 1200px;
  margin: 48px auto;

  .button {
    max-width: 310px;
    display: block;
    margin: 32px auto 0;
  }

  &__sectionForm {
    margin-top: 42px;
  }

  &__form {
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .subTitle {
    font-weight: 600;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 0.875rem;
    }

    input {
      height: 42px;
      padding: 4px 14px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
  }
}
</style>