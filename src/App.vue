<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet">

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" id="nav-text-color">
        <img src="./assets/LogoImagine.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-center">
        ImagineCx
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
              <li><a class="dropdown-item" v-on:click="loadContactsAll">Get All Contacts</a></li>
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
  }
}

</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.navbar {
  background-color: #2b2d2e;
}

.navbar .navbar-text {
  color: #e69a0f;
}

.navbar .nav-link {
  color: #e69a0f;
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
</style>
