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
                    <button class="button-def">
                        <svg height="30px" width="30px" viewBox="0 0 24.00 24.00" fill="none"
                            xmlns="http://www.w3.org/2000/svg" stroke="#e69a0f">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                                    stroke="#e69a0f" stroke-width="1.152" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </g>
                        </svg>
                        Eliminar</button>
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
                    <button class="button-def">
                        <svg width="25px" height="25px" fill="#e69a0f" viewBox="0 0 24 24" id="update"
                            data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line"
                            stroke="#e69a0f">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
                                stroke="#CCCCCC" stroke-width="0.048"></g>
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
                        Actualizar</button>
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
    padding: 25px;
    margin: 10px 20px;
}
</style>