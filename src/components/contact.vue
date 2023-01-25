<template>

    <h1>CONTACTS</h1>
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Nombre</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in contacts">
                <td>{{ item }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>

import axios from 'axios';

export default {
    name: 'contact',
    data: function () {
        return {
            contacts: [],
        }
    },

    methods: {
        getContacts() {

            // const axiosInstance = axios.create({
            //     headers: {
            //         "Access-Control-Allow-Origin": "*"
            //     }
            // });

            const url = "http://localhost:8080/api/imaginecx/contact";
            axios
                .get(url)
                    .then((result) => {
                        this.contacts = result.data
                        console.log( result.data.contacts); 
                    })
                    .catch((err) => {
                        console.log('Error: ' + err);
                    })
        }
    },
    created() {
        this.getContacts();
        document.title = 'Contacts'
    }
}

</script>