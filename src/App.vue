<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <main>
    <Header v-if="$route.name !== 'Login'" />
    <router-view></router-view>
    <Footer v-if="$route.name !== 'Login'" />
  </main>
</template>

<style scoped></style>
