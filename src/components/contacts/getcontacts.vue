<template>
    <div class="container">
        <h1>Buscar contacto por Id</h1>
        <br>
        <form action="" v-on:submit.prevent="getContactsId">
            <div class="row ">
                <div class="col-10 text-start">
                    <label for="inputId" class="form-label">Identificador Contacto</label>
                    <input type="number" v-model="contact.id" id="inputId" class="form-control"
                        aria-describedby="HelpBlock">
                </div>
                <div class="col-2 text-end">
                    <button type="submit" class="button-def" @click="clearValues" data-bs-toggle="modal"
                        data-bs-target="#modal1">
                        <svg height="25px" width="25px" viewBox="0 0 1024 1024" fill="#e69a0f" class="icon"
                            version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M982.72 937.28a32 32 0 0 0-34.88-6.72 32 32 0 0 0-10.56 6.72A32 32 0 0 0 928 960a32 32 0 0 0 9.28 22.72 36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 28.8 28.8 0 0 0 17.28-17.28A32 32 0 0 0 992 960a33.6 33.6 0 0 0-9.28-22.72zM822.72 777.28a32 32 0 0 0-45.12 45.12l64 64a32 32 0 0 0 45.12-45.12zM626.88 581.76a336.64 336.64 0 1 0-45.12 45.12l99.52 99.52a32 32 0 0 0 45.12-45.12zM368 640a272 272 0 1 1 272-272 272.32 272.32 0 0 1-272 272z"
                                    fill=""></path>
                            </g>
                        </svg>
                        Buscar</button>
                </div>
            </div>
        </form>

        <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modal1Label">{{ contact.id }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{{ nombre }}</h2>
                        <h2>{{ ciudad }}</h2>
                        <h5>{{ direccion }}</h5>
                        <h4>{{ job }}</h4>
                        <p>{{ created }}</p>
                        <h2>{{ error }}</h2>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="button-list" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <h1>All Contacts</h1>
        <br>
        <table class="table table-hover table-dark" v-if="data.length > 0">
            <thead>
                <tr class="color-items">
                    <th scope="col">#</th>
                    <th scope="col">Nombre del Contacto</th>
                    <th scope="col">Fecha de Creacion</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(item, idx) in data">
                    <th scope="row" class="color-items"> {{ item.id }} </th>
                    <td>{{ item.lookupName }}</td>
                    <td>{{ item.createdTime }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else="data == 0">
            <div class="alert alert-danger" role="alert">
                No hay contactos registrados
            </div>
        </div>
    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: "getcontacts",
    data: function () {
        return {
            data: [],
            nombre: "",
            ciudad: "",
            direccion: "",
            created: "",
            job: "",
            error: "",
            contact: {
                id: ""
            }
        }
    },
    methods: {
        getContacts() {

            const url = `http://localhost:8080/api/imaginecx/contacts`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.all
                })
                .catch((err) => {
                    console.log('Error: ' + err);
                })
        },
        getContactsId() {

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
                    } else {
                        this.error = err.message
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
        this.getContacts();
        document.title = 'Contacts';
    }
}

</script>


<style>

</style>