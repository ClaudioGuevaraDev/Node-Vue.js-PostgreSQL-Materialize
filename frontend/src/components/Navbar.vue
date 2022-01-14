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
                            <li>
                                <router-link to="/login" class="waves-effect waves-light btn">
                                    Iniciar Sesión
                                </router-link>
                            </li>
                            <li>
                                <a class="waves-effect waves-light btn">
                                    Registrarase
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <ul class="sidenav" id="mobile">
            <li>
                <router-link to="/login" class="waves-effect waves-light btn">
                    Iniciar Sesión
                </router-link>
            </li>
            <li>
                <a class="waves-effect waves-light btn">
                    Registrarase
                </a>
            </li>
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