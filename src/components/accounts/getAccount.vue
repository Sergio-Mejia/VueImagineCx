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
            <button type="submit" class="button-def" @click="clearValues">Buscar</button>
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
     
                        this.name= result.data.all.lookupName;
                        this.login= result.data.all.login;
                        this.perfil= `Perfil:  ${result.data.all.profile.lookupName}`;
                        this.notif= result.data.all.emailNotification.lookupName;
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