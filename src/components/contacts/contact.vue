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
            <button type="submit" class="button-def" @click="clearValues">Buscar</button>
        </form>
        <br>


        <div class="centrar">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ nombre }}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">{{ ciudad }}</h4>
                    <p class="card-text">{{ direccion }}</p>
                    <p class="card-text">{{ job }}</p>
                    <p class="card-text">{{ created }}</p>
                    <h2>{{ error }}</h2>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

import axios from 'axios';

export default {
    name: 'contact',
    data: function () {
        return {
            contacts: [],
            nombre: "",
            ciudad: "",
            direccion: "",
            created: "",
            job: "",
            error: "",
            contact: {
                id: 0
            }
        }
    },

    methods: {
        getContacts() {

            const url = `http://localhost:8080/api/imaginecx/contacts/${this.contact.id}`;
            axios
                .get(url)
                .then((result) => {
                    this.nombre = result.data.all.lookupName
                    this.ciudad = result.data.all.address.city
                    this.direccion = result.data.all.address.street
                    this.job = result.data.all.source.lookupName
                    this.created = result.data.all.createdTime
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.error = `El contacto ${this.contact.id} no se encuentra registrado`
                    }
                })
        },
        clearValues() {
            this.nombre = ""
            this.ciudad = ""
            this.direccion = ""
            this.job = ""
            this.created = ""
            this.error = ""
        }
    },
    created() {
        document.title = 'Contacts'
    }
}

</script>

<style>
.centrar {
    display: grid;
    place-items: center;
}
</style>