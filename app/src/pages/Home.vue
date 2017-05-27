<template>
  <div class="card-columns container-fluid">
    <list-video v-for="video in videos.data" :key="video.id" :video="video"></list-video>
  </div>
</template>

<script>
  import { getVideos } from 'src/api/video'
  import { mapGetters } from 'vuex'
  import ListVideo from 'src/components/ListVideo'

  export default {
    name: 'home',
    computed: {
      ...mapGetters(['videos'])
    },
    components: {
      ListVideo
    },
    mounted () {
      getVideos()
    }
  }
</script>

<style lang="sass" scoped>
  @import '../assets/sass/main.sass'

  .card-columns
    @include media-breakpoint-only(lg)
      column-count: 3
    @include media-breakpoint-only(xl)
      column-count: 5
</style>
