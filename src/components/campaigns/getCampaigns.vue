<template>

    <div class="container">
        <h1>Campaigns</h1>
        <br>
        <form action="" v-on:submit.prevent="getCampaignId">
            <label for="inputId" class="form-label">Identificador Campaña</label>
            <input type="number" v-model="campaign.id" id="inputId" class="form-control" aria-describedby="HelpBlock">
            <div id="HelpBlock" class="form-text">
                Ingresar identificador de la campaña
            </div>
            <br>
            <button type="submit" class="button-def" @click="clearValues">Buscar</button>
        </form>
        <br>


        <div class="centrar">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">{{ name }}</h3>
                    <h5 class="card-subtitle mb-2 text-muted">{{ created }}</h5>
                    <h2>{{ error }}</h2>
                </div>
            </div>
        </div>

        <br>
        <h1>All Campaigns</h1>
        <br>
        <table class="table table-hover table-dark">
            <thead>
                <tr class="color-items">
                    <th scope="col">#</th>
                    <th scope="col">Nombre Campaña</th>
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
    </div>

</template>


<script>
import axios from 'axios';


export default {
    name: "campaigns",
    data: function () {
        return {
            data: [],
            campaign: {
                id: 0
            },
            name: "",
            created: "",
            error: ""
        }
    },
    methods: {
        getCampaigns() {

            const url = `http://localhost:8080/api/imaginecx/campaigns`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.campaigns
                })
                .catch((err) => {
                    this.data = err.message
                })
        },
        getCampaignId() {

            const url = `http://localhost:8080/api/imaginecx/campaigns/${this.campaign.id}`;
            axios
                .get(url)
                .then((result) => {
                    this.name = result.data.campaigns.name
                    this.created = result.data.campaigns.eventoCreado
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.error = `La campaña ${this.campaign.id} no se encuentra registrada`
                    }
                })
        },
        clearValues() {
            this.name = ""
            this.created =""
            this.error = ""
        }
    },
    created() {
        this.getCampaigns();
        document.title = 'Campaigns';
    }
}

</script>


<style>

</style>