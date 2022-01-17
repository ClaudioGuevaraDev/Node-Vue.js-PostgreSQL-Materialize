<template>
    <div class="col l4">
        <div class="card blue-grey darken-1 small">
            <div class="card-content white-text">
                <div class="header">
                    <span class="card-title">{{ review.title }}</span>
                    <span class="date">{{ review.updatedat.split('T')[0] }}</span>
                </div>
                <p class="paragraph">
                    {{ review.comment }}
                </p>
            </div>
            <div class="card-action">
                <div class="buttons">
                    <router-link :to="{ name: 'update-review', params: { id: review.id } }" class="waves-effect waves-light btn yellow darken-1"><i class="material-icons">edit</i></router-link>
                    <a @click="handleDelete(review.id)" class="waves-effect waves-light btn red darken-1 modal-trigger"><i class="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { deleteReview } from '../services/reviews.js'

export default {
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    methods: {
        async handleDelete(reviewId) {
            try {
                const res = await deleteReview(reviewId, this.$store.state.token)
                this.$store.state.reviews = this.$store.state.reviews.filter(review => review.id !== res.id)
            } catch (error) {
                this.$toast.open({
                    type: 'error',
                    duration: 5000,
                    message: error.response.data.message,
                    position: 'top'
                })
            }
        },
    }
}
</script>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-title {
    font-size: 1.2rem;
    font-weight: 500;
}

.date {
    font-style: italic;
}

.paragraph {
    text-align: justify;
}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

</style>