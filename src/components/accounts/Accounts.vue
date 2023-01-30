<template>

    <div class="container">
        <br>
        <h1>All Accounts</h1>
        <br>
        <table class="table table-hover table-dark">
            <thead>
                <tr class="color-items">
                    <th scope="col">#</th>
                    <th scope="col">Usuario de la cuenta</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(item, idx) in data">
                    <th scope="row" class="color-items"> {{ item.id }} </th>
                    <td>{{ item.lookupName }}</td>
                    <td v-on:click="deleteAccounts(item.id)">
                        <button class="btn btn-danger">
                            <div style="height: 30px; width: 30px;">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                            stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: "Accounts",
    data: function () {
        return {
            data: [],
            accounts: {
                id: 0
            }
        }
    },
    methods: {
        getAccounts() {

            const url = `http://localhost:8080/api/imaginecx/accounts`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.accounts
                })
                .catch((err) => {
                    this.data = err.message
                })
        },

        deleteAccounts(id_account) {
            const url = `http://localhost:8080/api/imaginecx/accounts/${id_account}`;
            axios
                .delete(url)
                .then((result) => {
                    alert(result.data.msg)
                    this.getAccounts()
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `La cuenta ${id_account} no se encuentra registrada`
                    } else {
                        this.msg = err.message
                    }
                })
        },

    },
    created() {
        this.getAccounts();
        document.title = 'Accounts';
    }
}

</script>


<style>

</style>