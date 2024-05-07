<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <section class="edit container">
    <h1 class="title">Edição de Clientes</h1>

    <section class="edit__sectionForm">
      <h2 class="subTitle">Dados pessoais:</h2>
  
      <form class="edit__form">
        <fieldset>
          <label for="name">Nome:</label>
          <input type="text" id="name" />
        </fieldset>
        <fieldset>
          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" />
        </fieldset>
        <fieldset>
          <label for="rg">RG:</label>
          <input type="text" id="rg" />
        </fieldset>
        <fieldset>
          <label for="issueDate">Data Expedição:</label>
          <input type="text" id="issueDate" />
        </fieldset>
        <fieldset>
          <label for="issuingAuthority">Órgão Expedição:</label>
          <input type="text" id="issuingAuthority" />
        </fieldset>
        <fieldset>
          <label for="uf">UF:</label>
          <input type="text" id="uf" />
        </fieldset>
        <fieldset>
          <label for="birthDate">Data de Nascimento:</label>
          <input type="text" id="birthDate" />
        </fieldset>
        <fieldset>
          <label for="gender">Sexo:</label>
          <input type="text" id="gender" />
        </fieldset>
        <fieldset>
          <label for="maritalStatus">Estado Civil :</label>
          <input type="text" id="maritalStatus" />
        </fieldset>
      </form>
    </section>

    <section class="edit__sectionForm">
      <h2 class="subTitle">Endereço:</h2>
  
      <form class="edit__form">
        <fieldset>
          <label for="cep">CEP:</label>
          <input type="text" id="cep" />
        </fieldset>
        <fieldset>
          <label for="street">Logradouro :</label>
          <input type="text" id="street" />
        </fieldset>
        <fieldset>
          <label for="number">Número:</label>
          <input type="text" id="number" />
        </fieldset>
        <fieldset>
          <label for="complement">Complemento:</label>
          <input type="text" id="complement" />
        </fieldset>
        <fieldset>
          <label for="neighborhood">Bairro:</label>
          <input type="text" id="neighborhood" />
        </fieldset>
        <fieldset>
          <label for="city">Cidade:</label>
          <input type="text" id="city" />
        </fieldset>
        <fieldset>
          <label for="state">UF:</label>
          <input type="text" id="state" />
        </fieldset>
      </form>
    </section>

    <button class="button">Salvar</button>
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

  .button{
    max-width: 310px;
    display: block;
    margin: 32px auto 0;
  }

  &__sectionForm{
    margin-top: 42px;
  }

  &__form {
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    
    @media (max-width: 767px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px){
      grid-template-columns: 1fr;
    }
  }

  .subTitle{
    font-weight: 600;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    width: 100%;

    label{
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
