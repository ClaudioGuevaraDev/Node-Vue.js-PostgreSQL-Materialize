<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Registrarse</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <input 
                                type="text"
                                id="username"
                                required
                                autofocus
                                v-model="user.username"
                            >
                            <label for="username">Username</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="email" 
                                id="email"
                                required
                                v-model="user.email"
                            >
                            <label for="email">Correo Electrónico</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="password" 
                                id="password"
                                required
                                v-model="user.password"
                            >
                            <label for="password">Contraseña</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="password" 
                                id="repeat-password"
                                required
                                v-model="user.repetedPassword"
                            >
                            <label for="repeat-password">Repetir Contraseña</label>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button class="waves-effect waves-light btn">
                                Registro
                            </button>
                            <button 
                                @click="handleCancel"
                                class="btn-cancelar waves-effect waves-light btn red darken-1"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { signUp } from '../services/auth'

export default {
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
                repetedPassword: ''
            },
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            this.loading = true
            try {
                const res = await signUp(this.user)
                this.$toast.open({
                    type: 'success',
                    duration: 5000,
                    position: 'top',
                    message: res
                })
                this.$router.push('/login')
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    position: 'top',
                    message: error.response.data.message
                })
                this.handleCancel()
                this.loading = false
            }
        },
        handleCancel() {
            this.user = {
                username: '',
                email: '',
                password: '',
                repetedPassword: ''
            }
        }
    },
    mounted() {
        if (this.$store.state.logged) this.$router.push('/')
    }
}
</script>

<style scoped>

.row {
    display: flex;
    align-items: center;
}

.col {
    margin: auto;
}

.card {
    text-align: center;
}

.card-title {
    font-weight: bold;
}

.buttons {
    display: flex;
    justify-content: flex-start;
}

.btn-cancelar {
    margin-left: 0.5rem;
}

</style>