<template>
    <div class="row">
        <div class="col l5 m8 s12">
            <div class="card">
                <div class="card-content">
                    <span class="card-title">Crearse una cuenta</span>
                    <form>
                        <div class="input-field">
                            <input 
                                type="text"
                                id="username"
                            >
                            <label for="username">Username</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="email" 
                                id="email"
                            >
                            <label for="email">Correo Electrónico</label>
                        </div>
                        <div class="input-field">
                            <input 
                                type="password" 
                                id="password"
                            >
                            <label for="password">Contraseña</label>
                        </div>
                        <div class="buttons">
                            <button class="waves-effect waves-light btn">
                                Registrarse
                            </button>
                            <button class="btn-cancelar waves-effect waves-light btn red darken-1">
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.row {
    display: flex;
    align-items: center;
}

.col {
    margin: auto;
}

.card {
    text-align: center;
}

.card-title {
    font-weight: bold;
}

.buttons {
    display: flex;
    justify-content: flex-start;
}

.btn-cancelar {
    margin-left: 0.5rem;
}

</style>