<template>

    <div class="container">
        <h1>Campaigns</h1>
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
                                <button class="button-list" data-bs-toggle="modal" data-bs-target="#modalcampaign"
                                    v-on:click="getCampaignId(item.id)" @click="clearValues">
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
                        <p class="card-text">{{ item.createdTime }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else="data == 0">
            <div class="alert alert-danger" role="alert">
                No hay campañas registradas
            </div>
        </div>

        <div class="modal fade" id="modalcampaign" tabindex="-1" aria-labelledby="modalcampaignLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalcampaignLabel">{{ name }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h2>{{ id }}</h2>
                        <h4>{{ cost }}</h4>
                        <h4>{{ type }}</h4>
                        <p>{{ subject }}</p>
                        <h5>{{ created }}</h5>
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
            error: "",
            id: ""
        }
    },
    methods: {
        getCampaigns() {
            const url = `http://localhost:8080/api/imaginecx/campaigns`;
            axios
                .get(url)
                .then((result) => {
                    this.data = result.data.all
                    console.log(this.data + "Holaaaaaaaa");
                })
                .catch((err) => {
                    this.error = err.message
                })
        },
        getCampaignId(id_campaign) {

            const url = `http://localhost:8080/api/imaginecx/campaigns/${id_campaign}`;
            axios
                .get(url)
                .then((result) => {
                    this.id = result.data.all.id;
                    this.name = result.data.all.lookupName;
                    this.type = result.data.all.folder.lookupName;
                    this.cost = `Costo: ${result.data.all.actualCost.value}`
                    this.created = `Fecha Creación: ${result.data.all.createdTime}`;
                })
                .catch((err) => {
                    if (err.response.status === 404) {
                        this.error = `La campaña ${this.campaign.id} no se encuentra registrada`
                    }
                })
        },
        clearValues() {
            this.name= ""
            this.created= ""
            this.type= ""
            this.cost= ""
            this.error= ""
            this.id= ""
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