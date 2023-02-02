<template>
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
            <button type="submit" class="button-def" style="margin-right: 5px;">
                <svg width="25px" height="25px" fill="#e69a0f" viewBox="0 0 24 24" id="update" data-name="Flat Line"
                    xmlns="http://www.w3.org/2000/svg" class="icon flat-line" stroke="#e69a0f">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.048"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path id="primary" d="M4,12A8,8,0,0,1,18.93,8"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </path>
                        <path id="primary-2" data-name="primary" d="M20,12A8,8,0,0,1,5.07,16"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </path>
                        <polyline id="primary-3" data-name="primary" points="14 8 19 8 19 3"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </polyline>
                        <polyline id="primary-4" data-name="primary" points="10 16 5 16 5 21"
                            style="fill: none; stroke: #e69a0f; stroke-linecap: round; stroke-linejoin: round; stroke-width:1.176;">
                        </polyline>
                    </g>
                </svg>
                 Actualizar Contacto</button>
            <button type="reset" class="button-def">Limpiar Formulario</button>
        </form>
    </div>


</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';

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

            const url = `http://localhost:8080/api/imaginecx/contacts/${this.contact.id}`;
            axios
                .patch(url, {
                    "address": {
                        "city": this.contact.city,
                        "postalCode": this.contact.code,
                        "street": this.contact.street
                    }
                })
                .then((result) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        confirmButtonColor: '#2e2b2d',
                        text: `${result.data.msg}`,
                    })
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: `El contacto ${this.contact.id} no se encuentra registrado`,
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: `${err.message}`,
                        })
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