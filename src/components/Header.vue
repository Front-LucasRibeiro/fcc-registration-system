<script setup lang="ts">
  const logOut = () => {
    sessionStorage.removeItem('fccUserLogged');
  }
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/clientes">
            Clientes
          </router-link>
        </li>
        <li>
          <router-link to="/cadastrar">
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

<style scoped>
</style>
