<template>

    <div class="container">
        <br>
        <h1>All Accounts</h1>
        <div>
            <ul class="list-group">
                {{ data }}
            </ul>
        </div>
    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: "Accounts",
    data: function () {
        return {
            data: {}
        }
    },
    methods: {
        getAccounts() {

            const url = `http://localhost:8080/api/imaginecx/accounts`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data
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