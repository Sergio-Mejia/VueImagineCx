<template>
    <div class="container">
        <h1>Message Bases</h1>
        <br>
        <form action="" v-on:submit.prevent="getMessageBasesId">
            <div class="row">
                <div class="col-9">
                    <label for="inputId" class="form-label">Identificador messageBases</label>
                    <input type="number" v-model="message.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
                </div>
                <div class="col-3">
                    <button type="submit" class="button-def" @click="clearValues" data-bs-toggle="modal"
                        data-bs-target="#modalmessage">Buscar</button>
                </div>
            </div>
        </form>
        <br>
        <table class="table table-hover table-dark" v-if="data.length > 0">
            <thead>
                <tr class="color-items">
                    <th scope="col">#</th>
                    <th scope="col">Nombre del Mensaje</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(item, idx) in data">
                    <th scope="row" class="color-items"> {{ item.id }} </th>
                    <td>{{ item.lookupName }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else="data == 0">
            <div class="alert alert-danger" role="alert">
                No hay mensages registrados
            </div>
        </div>

        <div class="modal fade" id="modalmessage" tabindex="-1" aria-labelledby="modalmessageLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalmessageLabel">{{ id2 }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3>{{ msg }}</h3>
                        <h3>{{ nombre }}</h3>
                        <br>
                        <h4>{{ value }}</h4>
                        <br>
                        <h5>{{ type }}</h5>
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
    name: "messageBases",
    data: function () {
        return {
            data: [],
            id: "",
            message: {
                id: "",
            },
            value: "",
            nombre: "",
            type: "",
            msg: ""
        }
    },
    methods: {
        getMessageBases() {

            const url = `http://localhost:8080/api/imaginecx/messageBases`;
            axios.get(url)
                .then((result) => {
                    this.data = result.data.all
                })
                .catch((err) => {
                    this.msg = err.message
                })
        },
        getMessageBasesId() {
            const url = `http://localhost:8080/api/imaginecx/messageBases/${this.message.id}`;
            axios.get(url)
                .then((result) => {
                    this.id2 = result.data.all.id
                    this.nombre = result.data.all.lookupName
                    this.value = `Descripción: ${result.data.all.value}`
                    this.type = `Tipo Mensaje: ${result.data.all.usage.lookupName}`
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.msg = `Base de Mensaje ${this.message.id} no se encuentra registrado`
                    } else {
                        this.msg = err.message
                    }
                })
        },
        clearValues() {
            this.id = ""
            this.nombre = ""
            this.value = ""
            this.type = ""
            this.msg = ""

        },
    },
    created() {
        document.title = "messageBases";
        this.getMessageBases()
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