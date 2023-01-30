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
                    <h5 class="card-subtitle mb-2 text-muted">{{ type }}</h5>
                    <p>{{ cost }}</p>
                    <p>{{ created }}</p>
                    <h2>{{ error }}</h2>
                </div>
            </div>
        </div>

        <br>
        <h1>All Campaigns</h1>
        <br>
        <div class="row row-cols-3">
            <div class="col-4" v-for="(item, idx) in data">
                <div class="card text-bg-dark card-style">
                    <div class="card-header" style="color: #e69a0f;">
                        {{ item.id }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.lookupName }}</h5>
                        <p class="card-text">{{ item.createdTime }}</p>
                    </div>
                </div>
            </div>
        </div>

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
            type: "",
            cost: "",
            error: ""

        }
    },
    methods: {
        getCampaigns() {

            const url = `http://localhost:8080/api/imaginecx/campaigns`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.all
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
                        this.name = result.data.all.lookupName;
                        this.created = result.data.all.createdTime;
                        this.type = result.data.all.folder.lookupName;
                        this.cost = `Costo: ${result.data.all.actualCost.value}`
                    
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.error = `La campaña ${this.campaign.id} no se encuentra registrada`
                    }
                })
        },
        clearValues() {
            this.compania = {}
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
.card-style {
    max-width: 20rem;
    margin-top: 12px;
}
</style>