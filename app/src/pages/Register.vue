<template>
  <div class="container">

    <h1>Login</h1>

    <div class="form-group">
      <label for="email">Email:</label>
      <input id="email" class="form-control" type="email" v-model="email"/>
    </div>
    <div class="form-group">
      <label for="name">Username:</label>
      <input id="name" class="form-control" type="text" v-model="name"/>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input id="password" class="form-control" type="password" v-model="password"/>
    </div>
    <div class="form-group">
      <label for="confirmPassword">Confirm password:</label>
      <input id="confirmPassword" class="form-control" type="password" v-model="confirmPassword"/>
    </div>

    <button class="btn btn-primary" @click="register">Register</button>

  </div>
</template>

<script>
  import { createUser } from 'src/api/user'

  export default {
    name: 'register',
    data: function () {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        failed: false
      }
    },
    methods: {
      register: function () {
        if (this.password === this.confirmPassword) {
          createUser(this.name, this.email, this.password)
          .then(() => {
            this.$router.replace({name: 'Login'})
          })
          .catch(() => {
            this.failed = true
          })
        }
      }
    }
  }
</script>
