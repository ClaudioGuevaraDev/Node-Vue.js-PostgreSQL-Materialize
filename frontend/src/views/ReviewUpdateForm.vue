<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Editar Pintura</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <textarea required placeholder="Comentario" v-model="comment" class="materialize-textarea" rows="3"></textarea>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button type="submit" class="waves-effect waves-light btn">
                                Editar
                            </button>
                            <button 
                                @click="handleCancel"
                                type="button"
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
import { getOneReview, updateReview } from '../services/reviews'

export default {
    data() {
        return {
            loading: false,
            comment: ''
        }
    },
    methods: {
        async getReview() {
            try {
                const res = await getOneReview(this.$route.params.id, this.$store.state.token)
                this.comment = res[0].comment
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    message: error.response.data.message,
                    position: 'top'
                })
            }
        },
        async handleSubmit() {
            this.loading = true
            try {
                const data = {
                    comment: this.comment
                }
                await updateReview(this.$route.params.id, data, this.$store.state.token)
                this.$toast.open({
                    type: 'success',
                    duration: 5000,
                    message: 'Comentario actualizado con éxito.',
                    position: 'top'
                })
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    message: error.response.data.message,
                    position: 'top'
                })
            }
            this.handleCancel()
            this.loading = false
        },
        handleCancel() {
            this.comment = ''
        }
    },
    mounted() {
        this.getReview()
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