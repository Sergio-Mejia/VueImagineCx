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
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr  v-for="(item, idx) in data">
                    <th scope="row" class="color-items"> {{ item.id }} </th>
                    <td>{{ item.lookupName }}</td>
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
            data: []
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
        
    },
    created() {
        this.getAccounts();
        document.title = 'Accounts';
    }
}

</script>


<style>

</style>