<style lang="sass" src="./assets/sass/main.sass"></style>

<template>
    <div id="app">
        <header-component></header-component>
        <router-view style="margin-top: 1em"></router-view>
    </div>
</template>

<script>
  import store from 'src/vuex/store'
  import HeaderComponent from 'src/components/Header'

  export default {
    name: 'app',
    components: {
      HeaderComponent
    },
    store
  }
</script>
