<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Error from './components/Error.vue'
</script>

<template>
  <main>
    <Header v-if="$route.name !== 'Login'" />
    <router-view></router-view>
    <Footer v-if="$route.name !== 'Login'" />
    <Error />
  </main>
</template>

<style scoped></style>
