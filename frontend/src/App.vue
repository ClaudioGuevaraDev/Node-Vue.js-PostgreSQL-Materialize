<template>
    <div>
        <Navbar/>

        <div class="main indigo darken-1">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: {
        Navbar
    },
    mounted() {
        this.$store.dispatch('actionVerificationSession')
        M.AutoInit();
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.main {
    min-height: 90.3vh;
    height: 100%;
    padding: 2rem;
}

.container {
    width: 80%;
    margin: auto;
}

</style>