
<template>
    <!-- Top Bar -->
    <TopBar />
    <!-- Nav Bar -->
    <NavBar />
    <!-- main content part -->
    <main class="main-content">
        <router-view />
    </main>
    <!-- footer -->
    <footer>
        
    </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TopBar from '@/components/TopBar.vue';


export default {
    name: 'MainLayout',
    components: {
        NavBar, TopBar
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .main-content{
        padding: 0;
        margin: 0;
        width: 100%;
    }
</style>