<script setup lang="ts">
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import InfoModal from './components/InfoModal.vue'
</script>

<template>
  <Header v-if="$route.name !== 'Login'" />
  <main>
    <router-view></router-view>
    <InfoModal />
  </main>
  <Footer v-if="$route.name !== 'Login'" />
</template>

<style scoped></style>
