<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <router-link class="navbar-brand" :to="{ name: 'Home' }">Navbar</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" :to="{ name: 'Home' }">
          <a class="nav-link">Home</a>
        </router-link>
      </ul>

      <ul class="navbar-nav" v-if="!authenticated">

        <router-link tag="li" class="nav-item" :to="{ name: 'Login' }">
          <a class="nav-link">Login</a>
        </router-link>
        <router-link tag="li" class="nav-item" :to="{ name: 'Register' }">
          <a class="nav-link">Register</a>
        </router-link>

      </ul>

      <ul class="navbar-nav" v-else>

        <router-link tag="li" class="nav-item" :to="{ name: 'Upload' }">
          <a class="btn btn-outline-success">Upload</a>
        </router-link>


        <li class="dropdown nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuButton" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <img :src="profile.avatar"
                 class="rounded rounded-circle avatar-image img-thumbnail d-inline-block align-top"/>
            {{ profile.name }}
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link class="dropdown-item" :to="{ name: 'Profile' }">Profile</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" @click="logout" href="#">Logout</a>
          </div>
        </li>


      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'header',
    computed: {
      ...mapGetters(['authenticated', 'profile'])
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style lang="sass" scoped>

  .avatar-image
    margin-top: -0.5rem
    margin-bottom: -0.5rem
    height: 40px
    width: 40px

</style>
