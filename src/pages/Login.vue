<script setup lang="ts">
import ErrorLogin from '../components/ErrorLogin.vue';
</script>

<template>
  <section class="login">
    <h1 class="title">Login Registration System</h1>
    <form class="login__form">
      <fieldset class="login__field">
        <label for="user">Usuário:</label>
        <input type="text" id="user" name="user" />
      </fieldset>
      <fieldset class="login__field">
        <label for="password">Senha:</label>
        <input type="password" id="password" name="user" />
        <button class="login__field--showPassword" title="Ver senha"></button>
      </fieldset>

      <ErrorLogin />
    </form>
  </section>
</template>

<style scoped lang="scss">
@use './src/assets/scss/_variables' as var;

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var.$main-color;
  height: 100vh;

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

    &--showPassword {

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
