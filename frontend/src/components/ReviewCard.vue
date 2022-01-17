<template>
    <div class="col l4">
        <div class="card blue-grey darken-1 small">
            <div class="card-content white-text">
                <div class="header">
                    <span class="card-title">Título de la pintura</span>
                    <span class="date">17-01-2022</span>
                </div>
                <p class="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At magni molestias quibusdam adipisci aliquid, temporibus nisi. Quos optio culpa fugiat doloremque provident, alias, sunt fugit dolore eaque, quia hic nemo.
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