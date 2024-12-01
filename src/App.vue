<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>

  <section>
    <Header></Header>

    <RouterView />
  </section>
</template>

<style>

</style>
