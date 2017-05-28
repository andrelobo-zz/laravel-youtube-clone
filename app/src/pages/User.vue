<template>
  <div class="container">
    <div class="card card-inverse card-profile" :style="{background: color, borderColor: color }">
      <div class="card-block">
        <h1 class="card-title display-4">
          <img :src="user.avatar" class="rounded rounded-circle avatar-image img-thumbnail"/>
          {{ user.name }}
        </h1>
      </div>
    </div>

    <div class="card-columns">
      <list-video v-for="video in user.videos" :key="video.id" :video="video"></list-video>
    </div>

  </div>
</template>

<script>
  import { getUser } from 'src/api/user'
  import { mapGetters } from 'vuex'
  import ListVideo from 'src/components/ListVideo'
  import { stringToColor } from 'src/helpers/color'

  export default {
    name: 'user',
    data () {
      return {
        color: '#00bcd4'
      }
    },
    computed: {
      ...mapGetters(['user'])
    },
    components: {
      ListVideo
    },
    mounted () {
      getUser(this.$route.params.id)
      .then(() => {
        this.color = '#' + stringToColor(this.user.name)
      })
    }
  }
</script>

<style lang="sass" scoped>
  @import "../assets/sass/colors"

  .card-profile
    background: $cyan-500
    border-color: $cyan-500
    margin-bottom: 2em
    margin-top: 2em

    .card-title
      margin-bottom: 0

  .avatar-image
    height: 10.5rem
    width: 10.5rem

</style>
