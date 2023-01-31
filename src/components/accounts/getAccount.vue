<template>
    <br>
    <div class="container">
        <h1>Get Account by Id</h1>

        <form action="" v-on:submit.prevent="getAccount">
            <label for="inputId" class="form-label">Identificador Cuenta</label>
            <input type="number" v-model="account.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar número identificador de la cuenta
            </div>
            <br>
            <button type="submit" class="button-def" @click="clearValues">
                <svg height="25px" width="25px" viewBox="0 0 1024 1024" fill="#e69a0f" class="icon" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M982.72 937.28a32 32 0 0 0-34.88-6.72 32 32 0 0 0-10.56 6.72A32 32 0 0 0 928 960a32 32 0 0 0 9.28 22.72 36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 28.8 28.8 0 0 0 17.28-17.28A32 32 0 0 0 992 960a33.6 33.6 0 0 0-9.28-22.72zM822.72 777.28a32 32 0 0 0-45.12 45.12l64 64a32 32 0 0 0 45.12-45.12zM626.88 581.76a336.64 336.64 0 1 0-45.12 45.12l99.52 99.52a32 32 0 0 0 45.12-45.12zM368 640a272 272 0 1 1 272-272 272.32 272.32 0 0 1-272 272z"
                            fill=""></path>
                    </g>
                </svg>  Buscar</button>
        </form>
        <br>


        <div class="centrar">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ name }}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">{{ login }}</h4>
                    <p class="card-text">{{ notif }}</p>
                    <p class="card-text">{{ perfil }}</p>
                    <h2>{{ error }}</h2>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'getAccount',
    data() {
        return {
            account: {
                id: 0
            },

            name: "",
            login: "",
            perfil: "",
            notif: "",
            error: ""
        }
    },
    methods: {
        getAccount() {

            const url = `http://localhost:8080/api/imaginecx/accounts/${this.account.id}`;
            axios
                .get(url)
                .then((result) => {

                    this.name = result.data.all.lookupName;
                    this.login = result.data.all.login;
                    this.perfil = `Perfil:  ${result.data.all.profile.lookupName}`;
                    this.notif = result.data.all.emailNotification.lookupName;
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.error = `La cuenta ${this.account.id} no se encuentra registrada`;
                    }
                })
        },
        clearValues() {
            this.name = ""
            this.login = ""
            this.perfil = ""
            this.error = ""
        }
    },
    created() {
        document.title = "getAccount"
    }

}

</script>

<style>

</style>