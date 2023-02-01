<template>
    <div class="container">
        <h1>Delete and Update Organizations</h1>
        <br>
        <div class="row">
            <div class="col form-def">
                <form action="" v-on:submit.prevent="deleteOrganizations">
                    <div class="text-start">
                        <label for="Id" class="form-label">Identificador Organización</label>
                        <input type="text" v-model="organization.id" class="form-control">
                    </div>
                    <button class="button-def">Eliminar</button>
                </form>
            </div>
            <div class="col form-def">
                <form action="" v-on:submit.prevent="updateOrganizations">
                    <div class="text-start">
                        <label for="Id" class="form-label">Identificador Organización</label>
                        <input type="text" v-model="organization.id2" class="form-control">
                        <br>
                        <label for="nombre" class="form-label">Nombre de la Organización</label>
                        <input type="text" v-model="organization.nombre" class="form-control">
                    </div>
                    <button class="button-def">Actualizar</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name: "deleteUpdateO",
    data: function () {
        return {
            organization: {
                id: "",
                id2: "",
                nombre: ""
            }
        }
    },
    methods: {
        deleteOrganizations() {

            const url = `http://localhost:8080/api/imaginecx/organizations/${this.organization.id}`;
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
                    axios.delete(url)
                        .then((result) => {
                            Swal.fire(
                                'Eliminado!',
                                `${result.data.msg}`,
                                'success'
                            )
                        })
                        .catch((err) => {
                            if (err.response.status === 404) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Error',
                                    confirmButtonColor: '#2e2b2d',
                                    text: `La organización ${this.organization.id} no se encuentra registrada`,
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
        updateOrganizations() {

            const url = `http://localhost:8080/api/imaginecx/organizations/${this.organization.id2}`;
            axios.patch(url, {
                    name: this.organization.nombre
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
                            confirmButtonColor: '#2e2b2d',
                            text: `La organización ${this.organization.id2} no se encuentra registrada`,
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            confirmButtonColor: '#2e2b2d',
                            text: `${err.message}`,
                        })
                    }
                })
        }
    },
    created() {
        document.title = "Organizations"
    }
}

</script>

<style>
.form-def {
    border: solid 1px #aca7a7;
    border-radius: 40px;
    padding: 20px;
    margin-right: 10px;
}
</style>