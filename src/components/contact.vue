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
            <button type="submit" class="button-def">Buscar</button>
        </form>
        <br>
        <table class="table table-striped table-hover table-bordered">
            <tr v-for="(item, idx) in contacts">
                <td>{{ item }}</td>
            </tr>
        </table>

        <div class="centrar">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ nombre }}</h3>
                    <h4 class="card-subtitle mb-2 text-muted">{{ ciudad }}</h4>
                    <p class="card-text">{{ direccion }}</p>
                    <p class="card-text">{{ job }}</p>
                    <p class="card-text">{{ created }}</p>
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
            contact: {
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
                    this.nombre = result.data.name
                    this.ciudad = result.data.city
                    this.direccion = result.data.address
                    this.job = result.data.work
                    this.created = result.data.createdTime
                    console.log(result.data.name);
                })
                .catch((err) => {
                    console.log('Error: ' + err);
                })
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