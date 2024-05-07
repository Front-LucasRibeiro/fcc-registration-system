<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginApiService from '../services/LoginApiService';
import { sourceStore } from '../store';
import IInfo from '../types/IInfo';
import { SEND_MESSAGE_ACTION } from '../store/type-actions';

const textChangePassword = ref('password');
const fieldPassword = ref('');
const fieldUser = ref('');
const router = useRouter();
const store = sourceStore();


const login = async () => {
  const loginService = new LoginApiService();
  const loginData = await loginService.getUserLogin()

  const user = loginData.find(user => user.user === fieldUser.value && user.password === fieldPassword.value);

  if(fieldUser.value === '' || fieldPassword.value === ''){
    const message: IInfo = {
      status: 'error',
      message: 'Por favor, preencha todos os campos!',
      showInfo: true
    }

    store.dispatch(SEND_MESSAGE_ACTION, message)
  } else if (user) {
    sessionStorage.setItem('fccUserLogged', "true")
    router.push('/clientes');
  } else {
    const message: IInfo = {
      status: 'error',
      message: 'Usuário não encontrado, por favor, verifique os dados informados e tente novamente!',
      showInfo: true
    }

    store.dispatch(SEND_MESSAGE_ACTION, message)
  }
}

const changeViewPassword = (e: Event) => {
  e.preventDefault();

  if (textChangePassword.value === 'password') {
    textChangePassword.value = 'text';
  } else {
    textChangePassword.value = 'password';
  }
}


</script>

<template>
  <section class="login">
    <h1 class="title">Login Registration System</h1>
    <form @submit.prevent="login" class="login__form">
      <fieldset class="login__field">
        <label for="user">Usuário:</label>
        <input type="text" id="user" name="user" v-model=fieldUser />
      </fieldset>
      <fieldset class="login__field">
        <label for="password">Senha:</label>
        <div class="login__field--password">
          <input :type="textChangePassword" id="password" name="password" v-model=fieldPassword />
          <button class="login__field--btnShowPassword" :class="textChangePassword" title="Ver senha"
            @click="changeViewPassword"></button>
        </div>
      </fieldset>

      <button type="submit" class="button">Entrar</button>
    </form>
  </section>
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
    padding: 22px;
    background-color: #ededed;
    width: 100%;
    max-width: 310px;
  }

  .login__field {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem;

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

      &.text {
        background-image: url(var.$iconShowPassword);
      }
    }

    label {
      font-weight: 600;
      margin-bottom: 4px;
      font-size: 0.9rem;
    }

    input {
      border: 1px solid #ccc;
      background-color: #fefefe;
      outline: 0;
      height: 42px;
      border-radius: 6px;
      padding: 8px 14px;
      color: #111;
      width: 100%;
    }
  }
}
</style>
