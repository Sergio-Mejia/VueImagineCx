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
            <button type="submit" class="button-def" @click="clearValues">Actualizar</button>
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
        ,
        clearValues() {
            this.msg = ""
            this.login = ""
            this.perfil = ""
        }
    },
    created() {
        document.title = "getAccount"
    }

}

</script>

<style>

</style>