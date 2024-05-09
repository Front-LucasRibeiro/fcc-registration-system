<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { SAVE_EDITION_ACTION, ADD_CLIENT_ACTION } from '../store/type-actions';
import { z } from 'zod';
import { store } from '../store';



const schema = z.object({
  nome: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .min(3, { message: 'Campo deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'Campo deve ter no máximo 100 caracteres' }),
  sexo: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .min(1, { message: 'Campo deve ter no mínimo 1 caracter' }),
  cpf: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(11, { message: 'O CPF deve ter no máximo 11 caracteres' }),
  rg: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' }),
  dataExpedicao: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .date('Formato de data inválido'),
  dataNascimento: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .date('Formato de data inválido'),
  estadoCivil: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .min(3, { message: 'Campo deve ter no mínimo 3 caracteres' }),
  cep: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(8, 'Campo deve ter no máximo 8 caracteres'),
  logradouro: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(100, 'Campo deve ter no máximo 100 caracteres'),
  numero: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(10, 'Campo deve ter no máximo 10 caracteres'),
  bairro: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(50, 'Campo deve ter no máximo 50 caracteres'),
  cidade: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(50, 'Campo deve ter no máximo 50 caracteres'),
  ufEndereco: z.string({ message: 'Campo Obrigatório' })
    .nonempty({ message: 'Campo Obrigatório' })
    .max(2, 'Campo deve ter no máximo 2 caracteres'),
});


const props = defineProps({
  id: String,
  typeSave: String,
  clientToEdit: Object
})

const formDataClient = ref({
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
  enderecoId: '',
  cep: '',
  logradouro: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  ufEndereco: '',
});


watchEffect(() => {
  formDataClient.value = {
    clienteId: props.clientToEdit?.clienteId,
    nome: props.clientToEdit?.nome,
    cpf: props.clientToEdit?.cpf,
    rg: props.clientToEdit?.rg,
    dataExpedicao: props.clientToEdit?.dataExpedicao.split('T')[0],
    orgaoExpedicao: props.clientToEdit?.orgaoExpedicao,
    uf: props.clientToEdit?.uf,
    dataNascimento: props.clientToEdit?.dataNascimento.split('T')[0],
    sexo: props.clientToEdit?.sexo,
    estadoCivil: props.clientToEdit?.estadoCivil,
    enderecoId: props.clientToEdit?.endereco.enderecoId,
    cep: props.clientToEdit?.endereco.cep,
    logradouro: props.clientToEdit?.endereco.logradouro,
    numero: props.clientToEdit?.endereco.numero,
    complemento: props.clientToEdit?.endereco.complemento,
    bairro: props.clientToEdit?.endereco.bairro,
    cidade: props.clientToEdit?.endereco.cidade,
    ufEndereco: props.clientToEdit?.endereco.uf
  }
})


const fieldErrors = ref<any>({});

const saveClient = () => {
  const validClient = schema.safeParse(formDataClient.value);

  if (validClient.success) {
    fieldErrors.value = {}; // Limpar erros existentes

    let data = {
      clienteId: formDataClient.value.clienteId,
      cpf: validClient.data.cpf,
      nome: validClient.data.nome,
      rg: validClient.data.rg,
      dataExpedicao: validClient.data.dataExpedicao,
      orgaoExpedicao: formDataClient.value.orgaoExpedicao,
      uf: formDataClient.value.uf,
      dataNascimento: validClient.data.dataNascimento,
      sexo: validClient.data.sexo,
      estadoCivil: validClient.data.estadoCivil,
      endereco: {
        enderecoId: formDataClient.value.enderecoId,
        cep: validClient.data.cep,
        logradouro: validClient.data.logradouro,
        numero: validClient.data.numero,
        complemento: formDataClient.value.complemento,
        bairro: validClient.data.bairro,
        cidade: validClient.data.cidade,
        uf: validClient.data.ufEndereco
      }
    }

    if (props.typeSave === 'edit') {
      store.dispatch(SAVE_EDITION_ACTION, data)
    } else if ((props.typeSave === 'created')) {
      store.dispatch(ADD_CLIENT_ACTION, data)
    }
  } else {
    fieldErrors.value = {}; // Limpar erros existentes

    const errors = validClient.error.issues;
    errors.forEach((error) => {
      const fieldPath = error.path;
      const fieldName = fieldPath[0];
      fieldErrors.value[fieldName] = fieldErrors.value[fieldName] || [];
      fieldErrors.value[fieldName].push(error.message);
    });
  }
};
</script>

<template>
  <section class="edit container">

    <h1 class="title">Edição de Clientes</h1>

    <form @submit.prevent="saveClient">
      <section class="edit__sectionForm">
        <h2 class="subTitle">Dados pessoais:</h2>

        <div class="edit__form">
          <fieldset>
            <label for="name">*Nome:</label>
            <input type="text" id="name" v-model="formDataClient.nome" />
            <span v-if="fieldErrors['nome']" class="error-message">{{ fieldErrors['nome'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="cpf">*CPF:</label>
            <input type="text" id="cpf" v-model="formDataClient.cpf" placeholder="99999999999" />
            <span v-if="fieldErrors['cpf']" class="error-message">{{ fieldErrors['cpf'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="rg">*RG:</label>
            <input type="text" id="rg" v-model="formDataClient.rg" />
            <span v-if="fieldErrors['rg']" class="error-message">{{ fieldErrors['rg'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="issueDate">*Data Expedição:</label>
            <input :type="typeSave === 'edit' ? 'text' : 'date'" id="issueDate"
              v-model="formDataClient.dataExpedicao" />
            <span v-if="fieldErrors['dataExpedicao']" class="error-message">{{ fieldErrors['dataExpedicao'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="issuingAuthority">Órgão Expedição:</label>
            <input type="text" id="issuingAuthority" v-model="formDataClient.orgaoExpedicao" />
          </fieldset>
          <fieldset>
            <label for="uf">UF:</label>
            <input type="text" id="uf" v-model="formDataClient.uf" />
          </fieldset>
          <fieldset>
            <label for="birthDate">*Data de Nascimento:</label>
            <input :type="typeSave === 'edit' ? 'text' : 'date'" id="birthDate"  v-model="formDataClient.dataNascimento" />
            <span v-if="fieldErrors['dataNascimento']" class="error-message">{{ fieldErrors['dataNascimento'][0]
              }}</span>
          </fieldset>
          <fieldset>
            <label for="gender">*Sexo:</label>
            <input type="text" id="gender" v-model="formDataClient.sexo" />
            <span v-if="fieldErrors['sexo']" class="error-message">{{ fieldErrors['sexo'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="maritalStatus">*Estado Civil :</label>
            <input type="text" id="maritalStatus" v-model="formDataClient.estadoCivil" />
            <span v-if="fieldErrors['estadoCivil']" class="error-message">{{ fieldErrors['estadoCivil'][0] }}</span>
          </fieldset>
        </div>
      </section>

      <section class="edit__sectionForm">
        <h2 class="subTitle">Endereço:</h2>

        <div class="edit__form">
          <fieldset>
            <label for="cepVal">*CEP:</label>
            <input type="text" id="cepVal" v-model="formDataClient.cep" />
            <span v-if="fieldErrors['cep']" class="error-message">{{ fieldErrors['cep'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="street">*Logradouro :</label>
            <input type="text" id="street" v-model="formDataClient.logradouro" />
            <span v-if="fieldErrors['logradouro']" class="error-message">{{ fieldErrors['logradouro'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="number">*Número:</label>
            <input type="text" id="number" v-model="formDataClient.numero" />
            <span v-if="fieldErrors['numero']" class="error-message">{{ fieldErrors['numero'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="complement">Complemento:</label>
            <input type="text" id="complement" v-model="formDataClient.complemento" />

          </fieldset>
          <fieldset>
            <label for="neighborhood">*Bairro:</label>
            <input type="text" id="neighborhood" v-model="formDataClient.bairro" />
            <span v-if="fieldErrors['bairro']" class="error-message">{{ fieldErrors['bairro'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="city">*Cidade:</label>
            <input type="text" id="city" v-model="formDataClient.cidade" />
            <span v-if="fieldErrors['cidade']" class="error-message">{{ fieldErrors['cidade'][0] }}</span>
          </fieldset>
          <fieldset>
            <label for="state">*UF:</label>
            <input type="text" id="state" v-model="formDataClient.ufEndereco" placeholder="XX">
            <span v-if="fieldErrors['ufEndereco']" class="error-message">{{ fieldErrors['ufEndereco'][0] }}</span>
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

.error-message {
  color: tomato;
  font-size: 0.8rem;
  margin-top: 4px;
}

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
