<template>
    <div>
        <div class="row">
            <div v-for="review in $store.state.reviews" :key="review.id">
                <review-card :review="review"></review-card>
            </div>
        </div>
    </div>
</template>

<script>
import ReviewCard from '../components/ReviewCard.vue'

export default {
    components: {
        ReviewCard
    },
    mounted() {
        this.$store.dispatch('actionGetReviews')
    }
}
</script>