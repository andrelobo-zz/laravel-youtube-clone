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
  import { authenticate } from 'src/api/authenticate'
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
      test: function () {
        this.showAlert('Hello world', 'this is a test', 'warning')
      },
      login: function () {
        authenticate(this.username, this.password)
        .then(() => {
          this.$router.replace({name: 'Profile'})
        })
        .catch(() => {
          this.failed = true
        })
      },
      ...mapActions(['showAlert'])
    }
  }
</script>
