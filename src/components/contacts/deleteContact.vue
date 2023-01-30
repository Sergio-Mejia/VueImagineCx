<template>
    <br>
    <div class="container">
        <h1>DELETE CONTACTS</h1>
        <form action="" v-on:submit.prevent="deleteContacts">
            <label for="inputId" class="form-label">Identificador Contacto</label>
            <input type="number" v-model="contact.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar numero identificador del contacto
            </div>
            <button type="submit" class="button-def">Eliminar</button>
        </form>
        <br>
        <h4>{{ msg }}</h4>
    </div>



</template>

<script>

import axios from 'axios';

export default {
    name: 'deleteContact',
    data: function () {
        return {
            msg: "",
            contact: {
                id: 0
            }
        }
    },

    methods: {
        deleteContacts() {

            const url = `http://localhost:8080/api/imaginecx/contacts/${this.contact.id}`;
            axios
                .delete(url)
                .then((result) => {
                    this.msg = result.data.msg
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `El contacto no se encuentra registrado`
                    } else {
                        this.msg = err.message
                    }
                })
        },
    },
    created() {
        document.title = 'Contacts Delete'
    }
}

</script>

<style>

</style>