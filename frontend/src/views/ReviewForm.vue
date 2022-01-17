<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Comentar Pintura</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <textarea required id="comment" v-model="comment" class="materialize-textarea" rows="3"></textarea>
                            <label for="comment">Comentario</label>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button type="submit" class="waves-effect waves-light btn">
                                Comentar
                            </button>
                            <button 
                                type="button"
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
import { createReview } from '../services/reviews'

export default {
    data() {
        return {
            loading: false,
            comment: ''
        }
    },
    methods: {
        async handleSubmit() {
            this.loading = true
            try {
                const data = {
                    comment: this.comment,
                    userId: this.$store.state.userId,
                    pictureId: this.$route.params.id
                }
                await createReview(data, this.$store.state.token)
                this.$toast.open({
                    type: 'success',
                    duration: 5000,
                    position: 'top',
                    message: 'Comentario ingresado con éxito.'
                })
                this.$router.push('/')
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
            this.comment = ''
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