<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Añadir Pintura</span>
                    <form @submit.prevent="handleSubmit">
                        <div class="input-field">
                            <input 
                                type="text" 
                                id="title"
                                required
                                v-model="picture.title"
                            >
                            <label for="title">Título</label>
                        </div>
                        <div class="input-field">
                            <textarea required v-model="picture.description" id="description" class="materialize-textarea" rows="3"></textarea>
                            <label for="description">Descripción</label>
                        </div>
                        <div class="input-field">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span><i class="material-icons">cloud_upload</i></span>
                                    <input id="file-input" required @change="handleFile" type="file" multiple>
                                </div>
                                <div class="file-path-wrapper">
                                    <input id="file-input-text" class="file-path validate" type="text" placeholder="Subir un archivo...">
                                </div>
                            </div>
                        </div>
                        <div v-if="loading">
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                        </div>
                        <div v-else class="buttons">
                            <button type="submit" class="waves-effect waves-light btn">
                                Crear
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
import { 
    createPicture,
    uploadImage
} from '../services/pictures'

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
        async handleSubmit() {
            this.loading = true
            try {
                const data = {
                    title: this.picture.title,
                    description: this.picture.description,
                    userId: this.$store.state.userId
                }
                const res = await createPicture(data, this.$store.state.token)

                const pictureId = res.id

                if (res && this.picture.file !== null) {
                    const formData = new FormData()

                    formData.append('image', this.picture.file)

                    await uploadImage(formData, pictureId, this.$store.state.token)

                    this.$toast.open({
                        type: 'success',
                        duration: 5000,
                        position: 'top',
                        message: 'Imagen subida con éxito.'
                    })
                }
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
        handleFile(e) {
            this.picture.file = e.target.files[0]
        },
        handleCancel() {
            this.picture = {
                title: '',
                description: '',
                file: null
            }
            document.getElementById('file-input').value = null
            document.getElementById('file-input-text').value = null
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