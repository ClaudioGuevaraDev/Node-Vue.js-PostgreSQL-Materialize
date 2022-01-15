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
                            >
                            <label for="title">Título</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="text" 
                                id="author"
                            >
                            <label for="author">Autor</label>
                        </div>
                        <div class="input-field">
                            <textarea id="description" class="materialize-textarea" rows="3"></textarea>
                            <label for="description">Descripción</label>
                        </div>
                        <div class="input-field">
                            <div class="file-field input-field">
                                <div class="btn">
                                    <span><i class="material-icons">cloud_upload</i></span>
                                    <input type="file" multiple>
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
                                Crear
                            </button>
                            <button 
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
export default {
    data() {
        return {
            loading: false
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