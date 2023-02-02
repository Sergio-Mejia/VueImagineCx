<template>
    <div class="container">
        <h1>DELETE CONTACTS</h1>
        <form action="" v-on:submit.prevent="deleteContacts">
            <label for="inputId" class="form-label">Identificador Contacto</label>
            <input type="number" v-model="contact.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar numero identificador del contacto
            </div>
            <button type="submit" class="button-def">
                <svg  height="30px" width="30px" viewBox="0 0 24.00 24.00" fill="none"
                    xmlns="http://www.w3.org/2000/svg" stroke="#e69a0f">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                            stroke="#e69a0f" stroke-width="1.152" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
                Eliminar</button>
        </form>
        <br>
    </div>



</template>

<script>

import axios from 'axios';
import Swal from 'sweetalert2';

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
            Swal.fire({
                title: '¿Estás seguro?',
                text: "No se puede deshacer la acción",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2e2b2d',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .delete(url)
                        .then((result) => {
                            Swal.fire(
                                'Deleted!',
                                `${result.data.msg}`,
                                'success'
                            )
                            this.getAccounts()
                        })
                        .catch((err) => {
                            if (err.response.status === 404) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    confirmButtonColor: '#2e2b2d',
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