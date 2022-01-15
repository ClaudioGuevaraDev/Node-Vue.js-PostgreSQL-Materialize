<template>
    <div class="col l4">
        <div class="card large">
            <div class="card-image">
                <img src="https://www.closetag.com/images/photo4.jpg" alt=""> 
            </div>
            <div class="card-content">
                <span class="card-title title">El nacimiento de Venus <span class="author">(Sandro Botticelli)</span></span>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores consectetur iure minus, est voluptate impedit aut inventore dolorem dicta excepturi asd a.
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