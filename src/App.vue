<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">


  <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id="nav-text-color">
        <img src="./assets/LogoImagine.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-center">
        Imagine Cx
      </a>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="color: orange;">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacts
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" v-on:click="loadContact">Get Contact by Id</a></li>
              <li><a class="dropdown-item" v-on:click="loadContactDelete">Delete Contact</a></li>
              <li><a class="dropdown-item" v-on:click="loadContactUpdate">Update Contact</a></li>
              <li><a class="dropdown-item" v-on:click="loadContactsAll">All Contacts</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Accounts
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" v-on:click="loadgetAccount">Get Account by Id</a></li>
              <li><a class="dropdown-item" v-on:click="loadUpdateAccounts">Update Account</a></li>
              <li><a class="dropdown-item" v-on:click="loadAccounts">All Accounts</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Incidents
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" v-on:click="">Get Incident by Id</a></li>
              <li><a class="dropdown-item" v-on:click="updateIncident">Update Incident</a></li>
              <li><a class="dropdown-item" v-on:click="loadIncidents">All Incidents</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"> More </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" v-on:click="loadCampaigns">Campaigns</a></li>
              <li><a class="dropdown-item" v-on:click="loadCampaigns">Campaigns</a></li>
              <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">Test</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" v-on:click="loadCampaigns">Campaigns</a></li>
                  <li><a class="dropdown-item" href="#">Submenu0</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <span class="navbar-text">
          Sergio Daniel Mejia Carvajal
        </span>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  methods: {
    loadContact: function () {
      this.$router.push({ name: 'contact' });
    },
    loadContactDelete: function () {
      this.$router.push({ name: 'deleteContact' });
    },
    loadContactUpdate: function () {
      this.$router.push({ name: 'updateContact' });
    },
    loadContactsAll: function () {
      this.$router.push({ name: 'getcontacts' });
    },
    loadgetAccount: function () {
      this.$router.push({ name: 'getAccount' });
    },
    loadAccounts: function () {
      this.$router.push({ name: 'Accounts' });
    },
    loadUpdateAccounts: function () {
      this.$router.push({ name: 'updateAccount' });
    },
    loadCampaigns: function () {
      this.$router.push({ name: 'campaigns' });
    },
    loadIncidents: function () {
      this.$router.push({ name: 'allIncidents' });
    },
    updateIncident: function () {
      this.$router.push({ name: 'updateIncident' });
    },
  }
}

</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.navbar {
  background-color: #2e2b2d;
}

.navbar .navbar-text {
  color: #e69a0f;
}

.navbar .nav-link {
  color: #e69a0f;
  cursor: pointer;
}

.navbar .nav-link:hover {
  color: #6d4f19;
}

.navbar .navbar-brand:hover {
  color: #6d4f19;
}

.navbar .navbar-brand {
  color: #e69a0f;
}

.dropdown-item {
  cursor: pointer;
}

.container {
  margin-top: 100px;
}

.button-def {
  background-color: #2b2d2e;
  border-radius: 10px;
  border: 2px solid #2b2d2e;
  color: #e69a0f;
  font-size: 16px;
  margin-top: 20px;
  padding: 12px 30px;
}

.button-def:hover {
  background-color: #18181a;
}

.color-items {
  color: #e69a0f;
}

.navbar-nav li:hover>ul.dropdown-menu {
  display: block;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu>.dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
}

.dropdown-menu>li>a:hover:after {
  text-decoration: underline;
  transform: rotate(-90deg);
}
</style>
