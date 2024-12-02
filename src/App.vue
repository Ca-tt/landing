<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>

  <section>
    <Header></Header>

    <RouterView />
    <Footer></Footer>
  </section>
</template>

<style>

</style>
