<template>
    <div class="container">
        <h1>Update Account</h1>
        <br>
        <form action="" v-on:submit.prevent="updateAccounts">
            <div class="row">
                <div class="col">
                    <label for="inputPostal" class="form-label">Id de la cuenta</label>
                    <input type="text" v-model="account.id" id="inputId" class="form-control"
                        aria-describedby="HelpBlock"  required>
                </div>
                <div class="col">
                    <label for="inputPostal" class="form-label">Usuario Login a cambiar</label>
                    <input type="text" v-model="account.login" id="inputId" class="form-control"
                        aria-describedby="HelpBlock" required>
                    </div>
                </div>
                <button type="submit" class="button-def" @click="clearValues">Actualizar</button>
            <br>
        </form>
        <br>


        <div class="centrar">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ msg }}</h3>
                    <h2>{{ error }}</h2>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'updateAccount',
    data() {
        return {
            account: {
                id: 0,
                login: ""
            },
            msg: "",
            error: ""
        }
    },
    methods: {
        updateAccounts() {

            const url = `http://localhost:8080/api/imaginecx/accounts/${this.account.id}`;
            axios
                .patch(url, {
                    "login": this.account.login
                })
                .then((result) => {
                    this.msg = result.data.msg
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `La cuenta ${this.account.id} no se encuentra registrada`
                    } else {
                        this.msg = err.message
                    }
                })
        }
        ,
        clearValues() {
            this.msg = ""
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