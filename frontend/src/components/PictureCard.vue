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
                    <div v-if="$store.state.role === 'User'">
                        <div class="buttons">
                            <router-link :to="{ name: 'add-review', params: { id: picture.id } }" class="waves-effect waves-light btn light-blue darken-1"><i class="material-icons">insert_comment</i></router-link>
                        </div>
                    </div>
                    <div v-else-if="$store.state.role === 'Painter'">
                        <div class="buttons">
                            <router-link :to="{ name: 'update-picture', params: { id: picture.id }}" class="waves-effect waves-light btn yellow darken-1"><i class="material-icons">edit</i></router-link>
                            <a @click="handleDeletePicture(picture.id)" class="waves-effect waves-light btn red darken-1"><i class="material-icons">delete</i></a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import { deletePicture } from '../services/pictures'

export default {
    props: {
        picture: {
            type: Object,
            required: true
        },
    },
    methods: {
        getImageUrl(image) {
            return `/images/${image}`
        },
        updatePicture(pictureId) {
            return `/update-picture${pictureId}`
        },
        async handleDeletePicture(pictureId) {
            try {
                const res = await deletePicture(pictureId, this.$store.state.token)
                this.$store.state.pictures = this.$store.state.pictures.filter(picture => picture.id !== res.id)
                this.$toast.open({
                    type: 'success',
                    duration: 5000,
                    position: 'top',
                    message: 'Pintura eliminada con éxito.'
                })
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    position: 'top',
                    message: error.response.data.message
                })
            }
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