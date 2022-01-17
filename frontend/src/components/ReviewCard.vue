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
                    <a class="waves-effect waves-light btn yellow darken-1"><i class="material-icons">edit</i></a>
                    <a class="waves-effect waves-light btn red darken-1 modal-trigger"><i class="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        review: {
            type: Object,
            required: true
        }
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