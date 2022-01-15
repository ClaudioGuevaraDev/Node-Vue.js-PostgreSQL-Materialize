<template>
    <div>
        <div class="row">
            <div class="col l3">
                <router-link to="/add-picture" class="waves-effect waves-light btn">
                    Añadir pintura<i class="material-icons left">add</i>
                </router-link>
            </div>
        </div>
        <div class="row">
            <picture-card></picture-card>
            <picture-card></picture-card>
            <picture-card></picture-card>
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
        
    }
}
</script>
