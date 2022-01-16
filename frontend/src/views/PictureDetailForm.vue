<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Editar Pintura</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <input 
                                type="text" 
                                id="title"
                                v-model="picture.title"
                                placeholder="Título"
                            >
                            
                        </div>
                        <div class="input-field">
                            <textarea v-model="picture.description" placeholder="Descripción" id="description" class="materialize-textarea" rows="3"></textarea>
                        </div>
                        <div class="input-field">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span><i class="material-icons">cloud_upload</i></span>
                                    <input id="file-input" @change="handleFile" type="file" multiple>
                                </div>
                                <div class="file-path-wrapper">
                                    <input class="file-path validate" type="text" placeholder="Subir un archivo...">
                                </div>
                            </div>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button class="waves-effect waves-light btn">
                                Actualizar
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
import { getOnePicture, updatePicture, updatePictureImage } from '../services/pictures'

export default {
    data() {
        return {
            loading: false,
            picture: {
                title: '',
                description: '',
                file: null
            }
        }
    },
    methods: {
        async getPicture() {
            const res = await getOnePicture(this.$route.params.id)
            this.picture.title = res.title
            this.picture.description = res.description
        },
        async handleSubmit() {
            this.loading = true
            try {
                const data = {
                    title: this.picture.title,
                    description: this.picture.description
                }
                const res = await updatePicture(this.$route.params.id, data)

                if (res.id) {
                    if (this.picture.file === null) {
                        this.$toast.open({
                            type: 'success',
                            duration: 5000,
                            position: 'top',
                            message: 'Pintura actualizada con éxito. La imagen se mantuvo.'
                        })
                    } else {
                        const formData = new FormData()
                        formData.append('image', this.picture.file)
                        await updatePictureImage(this.$route.params.id, formData)
                        this.$toast.open({
                            type: 'success',
                            duration: 5000,
                            position: 'top',
                            message: 'Pintura actualizada con éxito.'
                        })
                    }
                }
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    position: 'top',
                    message: `Error al actualizar la pintura: ${error.response.data.message}`
                })
            }

            this.handleCancel()
            this.loading = false
        },
        handleFile(e) {
            this.picture.file = e.target.files[0]
        },
        handleCancel() {
            this.picture = {
                title: '',
                description: ''
            }
            document.getElementById('file-input').value = null
        }
    },
    mounted() {
        this.getPicture()
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