<template>
    <div>
        <div class="col l4">
            <div class="card large">
                <div class="card-image">
                    <img :src="getImageUrl(picture.image)" alt=""/>
                </div>
                <div class="card-content">
                    <span class="card-title title">{{ picture.title }} <span class="author">({{ picture.username }})</span></span>
                    <p class="description">
                        {{ picture.description }}
                    </p>
                </div>
                <div class="card-action">
                    <div class="buttons">
                        <router-link :to="{ name: 'update-picture', params: { id: picture.id }}" class="waves-effect waves-light btn yellow darken-1"><i class="material-icons">edit</i></router-link>
                        <a href="#modal-delete" class="waves-effect waves-light btn red darken-1 modal-trigger"><i class="material-icons">delete</i></a>
                        <a class="waves-effect waves-light btn light-blue darken-1"><i class="material-icons">insert_comment</i></a>
                    </div>
                </div>
                <div class="modal" id="modal-delete">
                    <div class="modal-content">
                        <h5>Eliminar Pintura</h5>
                        <p>¿Estas seguro de eliminar la pintura '{{ picture.title }}'?</p>
                    </div>
                    <div class="modal-footer">
                        <a @click="$store.dispatch('actionDeletePicture', picture.id)" class="modal-close waves-effect waves-green btn-flat">Confirmar</a>
                        <a class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>

export default {
    props: {
        picture: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImageUrl(image) {
            return `/images/${image}`
        },
        updatePicture(pictureId) {
            return `/update-picture${pictureId}`
        }
    },
    mounted() {
        M.AutoInit();
    }
}
</script>

<style scoped>

.title {
    font-size: 1.2rem;
    font-weight: 500;
}

.author {
    font-weight: normal;
    font-size: 1rem;
    font-style: italic;
}

.description {
    text-align: justify;
}

.buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>