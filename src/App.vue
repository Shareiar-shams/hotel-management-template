<template>
    <TopBar />
    <NavBar />
  
</template>

<script>
import NavBar from './components/NavBar.vue';
import TopBar from './components/TopBar.vue';


export default {
    name: 'App',
    components: {
        NavBar, TopBar
    }
}
</script>

<style>
</style>
