<template>

    <div class="container">
        <br>
        <h1>All Contacts</h1>
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
    name: "getcontacts",
    data: function () {
        return {
            data: ""
        }
    },
    methods: {
        getContacts() {



            // const url = `http://localhost:8080/api/imaginecx/contact`;
            const url2 = `https://ICXCandidate:Welcome2022@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/contacts/36`;
            axios
                .get(url2)
                .then((result) => {
                    this.data = result.data
                })
                .catch((err) => {
                    console.log('Error: ' + err);
                })
        }
    },
    created() {
        this.getContacts();
        document.title = 'Contacts';
    }
}

</script>


<style>

</style>