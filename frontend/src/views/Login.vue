<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Iniciar Sesión</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <input 
                                type="email" 
                                id="email"
                                v-model="user.email"
                            >
                            <label for="email">Correo Electrónico</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="password" 
                                id="password"
                                v-model="user.password"
                            >
                            <label for="password">Contraseña</label>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button class="waves-effect waves-light btn">
                                Ingresar
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
import { signIn } from '../services/auth'

export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        async handleSubmit() {
            this.loading = true
            try {
                const { token } = await signIn(this.user)

                window.localStorage.setItem('token', token)
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    message: error.response.data.message,
                    position: 'top'
                })
                this.handleCancel()
                this.loading = false
            }
        },
        handleCancel() {
            this.user = {
                email: '',
                password: ''
            }
        }
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