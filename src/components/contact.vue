<template>
    <br>
    <div class="container">
        <h1>CONTACTS</h1>
        <form action="" v-on:submit.prevent="getContacts">
            <label for="inputId" class="form-label">Identificador Contacto</label>
            <input type="number" v-model="contact.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar numero identificador del contacto
            </div>
            <br>
            <button type="submit" class="btn btn-success">Buscar</button>
        </form>
        <br>
        <table class="table table-striped table-hover table-bordered">
            <tr v-for="(item, idx) in contacts">
                <td>{{ item }}</td>
            </tr>
        </table>
    </div>


</template>

<script>

import axios from 'axios';

export default {
    name: 'contact',
    data: function () {
        return {
            contacts: [],
            contact : {
                id: 0
            }
        }
    },

    methods: {
        getContacts() {

            const url = `http://localhost:8080/api/imaginecx/contact/${this.contact.id}`;
            axios
                .get(url)
                .then((result) => {
                    this.contacts = result.data
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

<style>


</style>