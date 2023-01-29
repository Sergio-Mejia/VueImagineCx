<template>
    <br>
    <div class="container">
        <h1>DELETE Accounts</h1>
        <form action="" v-on:submit.prevent="deleteAccounts">
            <label for="inputId" class="form-label">Identificador de la cuenta</label>
            <input type="number" v-model="accounts.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar número identificador de la cuenta
            </div>
            <br>
            <button type="submit" class="button-def">Eliminar</button>
        </form>
        <br>
        <h4>{{ msg }}</h4>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'deleteAccounts',
    data: function () {
        return {
            msg: "",
            accounts: {
                id: 0
            }
        }
    },

    methods: {
        deleteAccounts() {

            const url = `http://localhost:8080/api/imaginecx/accounts/${this.accounts.id}`;
            axios
                .delete(url)
                .then((result) => {
                    this.msg = result.data.msg
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `La cuenta ${this.accounts.id} no se encuentra registrada`
                    } else {
                        this.msg = err.message
                    }
                })
        },
    },
    created() {
        document.title = 'Accounts Delete'
    }
}

</script>

<style>

</style>