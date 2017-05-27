<template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <router-link class="navbar-brand" :to="{ name: 'Home' }">Navbar</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" class="nav-item" :to="{ name: 'Home' }">
                    <a class="nav-link">Home</a>
                </router-link>
            </ul>

            <ul class="navbar-nav">
                <router-link tag="li" class="nav-item" :to="{ name: 'Login' }">
                    <a class="nav-link">Login</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'header',
    computed: {
      ...mapGetters(['authenticated'])
    }
  }
</script>
