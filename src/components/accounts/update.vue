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
    </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

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
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        confirmButtonColor: '#2e2b2d',
                        text: `${result.data.msg}`,
                    })
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            confirmButtonColor: '#2e2b2d',
                            text: `la cuenta ${this.account.id} no se encuentra registrada`,
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            confirmButtonColor: '#2e2b2d',
                            text: `${err.message}`,
                        })
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