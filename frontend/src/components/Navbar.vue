<template>
    <div>
        <nav class="nav-extended">
            <div class="nav-wrapper indigo darken-4">
                <div class="">
                    <router-link class="title brand-logo" to="/">
                        Node + Vue.js
                    </router-link>
                    <div class="right">
                        <a 
                            href="#" 
                            data-target="mobile"
                            class="sidenav-trigger"
                        >
                            <i class="material-icons">menu</i>
                        </a>
                        <ul class="hide-on-med-and-down">
                            <div v-if="$store.state.logged">
                                <li>
                                    <router-link to="/">{{ $store.state.username }}</router-link>
                                </li>
                                <li class="active">
                                    <router-link to="/">Mis Reseñas</router-link>
                                </li>
                                <li>
                                    <a @click="$store.dispatch('actionLogout')" class="waves-effect waves-light btn red darken-1">
                                        Cerrar Sesión <i class="material-icons right">exit_to_app</i>
                                    </a>
                                </li>
                            </div>
                            <div v-else>
                                <li>
                                    <router-link to="/login" class="waves-effect waves-light btn">
                                        Iniciar Sesión
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/register" class="waves-effect waves-light btn">
                                        Registrarase
                                    </router-link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <ul class="sidenav" id="mobile">
            <div v-if="$store.state.logged">
                <li>
                    <router-link to="/">{{ $store.state.username }}</router-link>
                </li>
                <li class="active">
                    <router-link to="/">Mis Reseñas</router-link>
                </li>
                <li>
                    <a @click="$store.dispatch('actionLogout')"  class="waves-effect waves-light btn red darken-1">
                        Cerrar Sesión
                    </a>
                </li>
            </div>
            <div v-else>
                <li>
                    <router-link to="/login" class="waves-effect waves-light btn">
                        Iniciar Sesión
                    </router-link>
                </li>
                <li>
                    <router-link to="/register" class="waves-effect waves-light btn">
                        Registrarase
                    </router-link>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    mounted() {
        M.AutoInit();
    }
}
</script>

<style scoped>

.title {
    margin-left: 1rem;
}

</style>