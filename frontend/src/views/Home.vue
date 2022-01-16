<template>
    <div>
        <div class="row">
            <div v-if="$store.state.role === 'Painter'" class="col l3">
                <router-link to="/add-picture" class="waves-effect waves-light btn">
                    Añadir pintura<i class="material-icons left">add</i>
                </router-link>
            </div>
        </div>
        <div class="row">
            <div v-for="picture in $store.state.pictures" :key="picture.id">
                <picture-card :picture="picture"></picture-card>
            </div>
        </div>
    </div>
</template>

<script>
import PictureCard from '../components/PictureCard.vue'

export default {
    name: 'Home',
    components: {
        PictureCard
    },
    mounted() {
        this.$store.dispatch('actionGetPictures')
    }
}
</script>
