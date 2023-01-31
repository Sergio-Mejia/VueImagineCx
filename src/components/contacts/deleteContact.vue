<template>
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