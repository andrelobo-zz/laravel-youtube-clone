<template>
  <div class="container">
    <h1>{{ profile.name }}</h1>

    <div class="card-columns">
      <list-video v-for="video in profile.videos" :key="video.id" :video="video"></list-video>
    </div>

  </div>
</template>

<script>
  import { getProfile } from 'src/api/user'
  import { mapGetters } from 'vuex'
  import ListVideo from 'src/components/ListVideo'

  export default {
    name: 'profile',
    computed: {
      ...mapGetters(['profile'])
    },
    components: {
      ListVideo
    },
    mounted () {
      getProfile()
    }
  }
</script>
