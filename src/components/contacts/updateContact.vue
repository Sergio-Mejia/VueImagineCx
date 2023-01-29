<template>
    <br>
    <div class="container">
        <h1>CONTACTS UPDATE</h1>
        <br>
        <form action="" v-on:submit.prevent="updateContacts">

            <div class="row">
                <div class="col">
                    <label for="inputId" class="form-label">Identificador Contacto</label>
                    <input type="number" v-model="contact.id" id="inputId" class="form-control" required>
                </div>
                <div class="col">
                    <label for="inputCity" class="form-label">Ciudad</label>
                    <input type="text" v-model="contact.city" id="inputCity" class="form-control" required>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <label for="inputPostal" class="form-label">Codigo Postal</label>
                    <input type="text" v-model="contact.code" id="inputPostal" class="form-control" required>
                </div>
                <div class="col">
                    <label for="inputDir" class="form-label">Dirección</label>
                    <input type="text" v-model="contact.street" id="inputDir" class="form-control" required>
                </div>
            </div>
            <br>
            <button type="submit" class="button-def">Actualizar Contacto</button>
        </form>
        <br>
        <h3>{{ msg }}</h3>
    </div>


</template>

<script>

import axios from 'axios';

export default {
    name: 'updateContact',
    data: function () {
        return {
            msg: "",
            contact: {
                id: 0,
                city: "",
                code: "",
                street: ""
            }
        }
    },

    methods: {
        updateContacts() {

            const url = `http://localhost:8080/api/imaginecx/contact/${this.contact.id}`;
            axios
                .patch(url, {
                    "address": {
                        "city": this.contact.city,
                        "postalCode": this.contact.code,
                        "street": this.contact.street
                    }
                })
                .then((result) => {
                    this.msg = result.data.msg
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `El contacto ${this.contact.id} no se encuentra registrado`
                    } else {
                        this.msg = err.message
                    }
                })
        }
    },
    created() {
        document.title = 'Contacts Update'
    }
}

</script>

<style>

</style>