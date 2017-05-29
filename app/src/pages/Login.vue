<template>
  <div class="container">

    <h1>Login</h1>

    <div class="form-group">
      <label for="email">Email:</label>
      <input id="email" class="form-control" type="email" v-model="username"/>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input id="password" class="form-control" type="password" v-model="password"/>
    </div>

    <button class="btn btn-primary" @click="test">Login</button>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',
    data: function () {
      return {
        username: '',
        password: '',
        failed: false
      }
    },
    methods: {
      login: function () {
        this.authenticate(this.username, this.password)
        .then(() => {
          this.$router.replace({name: 'Profile'})
        })
        .catch(() => {
          this.failed = true
        })
      },
      ...mapActions(['showAlert', 'authenticate])
    }
  }
</script>
