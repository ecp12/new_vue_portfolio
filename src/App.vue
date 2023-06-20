<script setup>
import Nav from './components/NAV.vue'
import ContatView from './views/ContatView.vue';
import HomeView from './views/HomeView.vue';
import Proyectos from './views/Proyectos.vue'
</script>

<template>
  <header>
    <Nav></Nav>
  </header>
 <main>
  <HomeView></HomeView>
  <Proyectos></Proyectos>
  <ContatView></ContatView>
 </main>
  
  
</template>

<style  scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
