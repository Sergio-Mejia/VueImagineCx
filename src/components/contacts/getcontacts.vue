<template>

    <div class="container">
        <br>
        <h1>All Contacts</h1>

        <br>
        <table class="table table-hover table-dark">
            <thead>
                <tr class="color-items">
                    <th scope="col">#</th>
                    <th scope="col">Nombre del Contacto</th>
                    <th scope="col">Fecha de Creacion</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr  v-for="(item, idx) in data">
                    <th scope="row" class="color-items"> {{ item.id }} </th>
                    <td>{{ item.lookupName }}</td>
                    <td>{{ item.createdTime }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: "getcontacts",
    data: function () {
        return {
            data: []
        }
    },
    methods: {
        getContacts() {

            const url = `http://localhost:8080/api/imaginecx/contact`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.contacts
                    console.log( result.data.contacts ); 
                })
                .catch((err) => {
                    console.log('Error: ' + err);
                })
        },
        
    },
    created() {
        this.getContacts();
        document.title = 'Contacts';
    }
}

</script>


<style>

</style>