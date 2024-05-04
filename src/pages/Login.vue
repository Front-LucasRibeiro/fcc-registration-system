<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import ErrorLogin from '../components/Error.vue';


const textChangePassword = ref('password');


const login = () => {
  // enviar usuario e senha para o servico checkar
}
 
const changeViewPassword = (e: Event) => {
  e.preventDefault();

  if (textChangePassword.value === 'password') {
    textChangePassword.value = 'text';
  } else {
    textChangePassword.value = 'password';
  }
}

watchEffect(() => {
  
});

</script>

<template>
  <main>
    <section class="login">
      <h1 class="title">Login Registration System</h1>
      <form class="login__form">
        <fieldset class="login__field">
          <label for="user">Usuário:</label>
          <input type="text" id="user" name="user" />
        </fieldset>
        <fieldset class="login__field">
          <label for="password">Senha:</label>
          <div class="login__field--password">
            <input :type="textChangePassword" id="password" name="password" />
            <button class="login__field--btnShowPassword" :class="textChangePassword" title="Ver senha" @click="changeViewPassword"></button>
          </div>
        </fieldset>

        <button class="button" @click="login">Entrar</button>
        <ErrorLogin />
      </form>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use './src/assets/scss/variables' as var;
@import './src/assets/scss/mixins';

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var.$main-color;
  height: 100vh;
  padding: 0 14px;

  @include button(var.$main-color, var.$main-color-hover, var.$sec-color);
  @include title(var.$sec-color);

  .title {
    margin-bottom: 1.375rem;
  }

  .login__form {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 8px 22px;
    background-color: #ededed;
  }

  .login__field {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;

    &--password {
      position: relative;
    }

    &--btnShowPassword {
      position: absolute;
      right: 12px;
      top: 8px;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      border: 0;
      cursor: pointer;
      background-image: url(var.$iconHidePassword);

      &.text{
        background-image: url(var.$iconShowPassword);
      }
    }

    label {
      font-weight: 600;
      margin-bottom: 4px;
    }

    input {
      min-width: 310px;
      border: 1px solid #ccc;
      background-color: #fefefe;
      outline: 0;
      height: 42px;
      border-radius: 6px;
      padding: 8px 14px;
      color: #111;
    }
  }
}
</style>
