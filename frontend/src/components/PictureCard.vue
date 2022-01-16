<template>
    <div class="col l4">
        <div class="card large">
            <div class="card-image">
                <img src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340" alt=""> 
            </div>
            <div class="card-content">
                <span class="card-title title">{{ picture.title }} <span class="author">({{ picture.username }})</span></span>
                <p class="description">
                    {{ picture.description }}
                </p>
            </div>
            <div class="card-action">
                <div class="buttons">
                    <a class="waves-effect waves-light btn yellow darken-1"><i class="material-icons">edit</i></a>
                    <a class="waves-effect waves-light btn red darken-1"><i class="material-icons">delete</i></a>
                    <a class="waves-effect waves-light btn light-blue darken-1"><i class="material-icons">insert_comment</i></a>
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