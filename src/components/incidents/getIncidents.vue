<template>
    <div class="container">
        <h1>All Incidents</h1>
        <br>
        <form action="" v-on:submit.prevent="getincidentById">
            <div class="row">
                <div class="col-9">
                    <label for="inputId" class="form-label">Identificador Incidente</label>
                    <input type="number" v-model="id2" id="inputId" class="form-control" aria-describedby="HelpBlock">
                </div>
                <div class="col-3">
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
        <br>
        <div class="row row-cols-3" v-if="data.length > 0">
            <div class="col-4" v-for="(item, idx) in data">
                <div class="card text-bg-dark card-style">
                    <div class="card-header" style="color: #e69a0f;">
                        <div class="row">
                            <div class="col">
                                {{ item.id }}
                            </div>
                            <div class="col">
                                <button class="button-list" data-bs-toggle="modal" data-bs-target="#modal1"
                                    v-on:click="incidentById(item.id)" @click="clearValues">
                                    <svg height="20px" width="20px" viewBox="0 0 24 24" fill="none"
                                        xmlns="../assets/more.svg" stroke="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
                                                stroke="#e69a0f" stroke-width="1.5"></path>
                                            <path
                                                d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
                                                stroke="#e69a0f" stroke-width="1.5"></path>
                                            <path
                                                d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                                                stroke="#e69a0f" stroke-width="1.5"></path>
                                        </g>
                                    </svg>
                                    Info
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.lookupName }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div v-else="data == 0">
            <div class="alert alert-danger" role="alert">
                No hay incidentes registrados
            </div>
        </div>

        <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="modal1Label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modal1Label">{{ nombre }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{{ id }}</h2>
                        <h5>{{ created }}</h5>
                        <h4>{{ estado }}</h4>
                        <h4>{{ tipoEstado }}</h4>
                        <p>{{ subject }}</p>
                        <h3>{{ msg }}</h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="button-list" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import axios from 'axios';

export default {
    name: "allIncidents",
    data: function () {
        return {
            data: [],
            id: "",
            id2: "",
            nombre: "",
            created: "",
            estado: "",
            tipoEstado: "",
            subject: "",
            msg: ""
        }
    },
    methods: {
        getIncidents() {

            const url = `http://localhost:8080/api/imaginecx/incidents`;
            axios.get(url)
                .then((result) => {
                    this.data = result.data.all
                })
                .catch((err) => {
                    this.msg = err.message
                })
        },
        incidentById(id_incident) {
            const url = `http://localhost:8080/api/imaginecx/incidents/${id_incident}`;
            axios.get(url)
                .then((result) => {
                    this.id = result.data.all.id
                    this.nombre = result.data.all.lookupName
                    this.created = result.data.all.createdTime
                    this.estado = `Estado: ${result.data.all.statusWithType.status.lookupName}`
                    this.tipoEstado = result.data.all.statusWithType.statusType.lookupName
                    this.subject = result.data.all.subject
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getincidentById() {
            const url = `http://localhost:8080/api/imaginecx/incidents/${this.id2}`;
            axios.get(url)
                .then((result) => {
                    this.id = result.data.all.id
                    this.nombre = result.data.all.lookupName
                    this.created = result.data.all.createdTime
                    this.estado = `Estado: ${result.data.all.statusWithType.status.lookupName}`
                    this.tipoEstado = result.data.all.statusWithType.statusType.lookupName
                    this.subject = result.data.all.subject
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `El incidente ${this.id2} no se encuentra registrado`
                    } else {
                        this.msg = err.message
                    }
                })
        },
        clearValues() {
            this.id = ""
            this.nombre = ""
            this.created = ""
            this.estado = ""
            this.tipoEstado = ""
            this.msg = ""
            this.subject = ""
        },
    },
    created() {
        document.title = "Incidents";
        this.getIncidents()
    }
}

</script>

<style>
.button-list {
    background-color: #2b2d2e;
    border-radius: 10px;
    border: 2px solid #2b2d2e;
    color: #e69a0f;
    font-size: 16px;
    padding: 5px 30px;
}

.button-list:hover {
    background-color: #18181a;
}
</style>