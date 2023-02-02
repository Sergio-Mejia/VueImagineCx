<template>
    <div class="container">
        <h1>Update Account</h1>
        <br>
        <form action="" v-on:submit.prevent="updateAccounts">
            <div class="row">
                <div class="col">
                    <label for="inputPostal" class="form-label">Id de la cuenta</label>
                    <input type="text" v-model="account.id" id="inputId" class="form-control"
                        aria-describedby="HelpBlock" required>
                </div>
                <div class="col">
                    <label for="inputPostal" class="form-label">Usuario Login a cambiar</label>
                    <input type="text" v-model="account.login" id="inputId" class="form-control"
                        aria-describedby="HelpBlock" required>
                </div>
            </div>
            <button type="submit" class="button-def" @click="clearValues">
                <svg width="25px" height="25px" fill="#e69a0f" viewBox="0 0 24 24" id="update" data-name="Flat Line"
                    xmlns="http://www.w3.org/2000/svg" class="icon flat-line" stroke="#e69a0f">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.048"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path id="primary" d="M4,12A8,8,0,0,1,18.93,8"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </path>
                        <path id="primary-2" data-name="primary" d="M20,12A8,8,0,0,1,5.07,16"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </path>
                        <polyline id="primary-3" data-name="primary" points="14 8 19 8 19 3"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </polyline>
                        <polyline id="primary-4" data-name="primary" points="10 16 5 16 5 21"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </polyline>
                    </g>
                </svg>
                Actualizar</button>
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