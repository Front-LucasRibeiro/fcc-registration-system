<script setup lang="ts">
  const logOut = () => {
    sessionStorage.removeItem('fccUserLogged');
  }
</script>

<template>
  <header class="header">
    <img src="/public/cropped-iconeFCC-1-32x32.png" alt="FCC - Fundação Carlos Chagas" class="header__logo" />
    <nav class="header__nav">
      <ul>
        <li>
          <router-link to="/clientes">
            Clientes
          </router-link>
        </li>
        <li>
          <router-link to="/clientes/cadastrar">
            Cadastrar
          </router-link>
        </li>
        <li>
          <router-link to="/" @click="logOut">
            Sair
          </router-link>
        </li>
      </ul>
    </nav>
  </header> 
</template>

<style scoped lang="scss">
@use './src/assets/scss/variables' as var;

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var.$main-color;
  height: 56px;
  box-shadow: 2px 2px 22px #bbb;
  padding: 0 1.375rem;

  &__nav{
    ul{
      display: flex;
      gap: 16px;

      li{
        a{
          color: var.$sec-color;
          text-decoration: none;
          font-size: 1rem;
          transition: .5s;

          &:hover{
            color: #ccc;
            padding-bottom: 5px;
            transition: .5s;
          }
        }
      }
    }
  }
}
</style>
