<template>
    <div class="container">
        <h1>Update Incident</h1>
        <br>
        <form action="" v-on:submit.prevent="updateIncidents">
            <div class="row">
                <div class="col">
                    <label for="inputId" class="form-label">Id del incidente</label>
                    <input type="text" v-model="incident.id" id="inputId" class="form-control"
                        aria-describedby="HelpBlock" required>
                </div>
                <div class="col">
                    <label for="inputTema" class="form-label">Tema a cambiar</label>
                    <input type="text" v-model="incident.subject" id="inputTema" class="form-control"
                        aria-describedby="HelpBlock" required>
                </div>
            </div>
            <button type="submit" class="button-def">
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
                Actualizar</button>
            <br>
        </form>
        <br>
    </div>

</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2'

export default {
    name: 'updateIncident',
    data() {
        return {
            incident: {
                id: "",
                subject: ""
            },
            msg: "",
        }
    },
    methods: {
        updateIncidents() {
            const url = `http://localhost:8080/api/imaginecx/incidents/${this.incident.id}`;
            axios
                .patch(url, {
                    "subject": this.incident.subject
                })
                .then((result) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Éxito',
                        text: `${result.data.msg}`,
                    })
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: `El incidente ${this.incident.id} no se encuentra registrado`,
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
        document.title = "getIncident"
    }

}

</script>

<style>

</style>