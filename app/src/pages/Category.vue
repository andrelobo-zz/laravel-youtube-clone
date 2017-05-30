<template>
  <div class="container-fluid row">
    <div class="col-2 hidden-md-down">
      <categories :categories="topCategories" :active="$route.params.id"></categories>
    </div>

    <div class="col card-columns">
      <list-video v-for="video in videos.data" :key="video.id" :video="video"></list-video>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ListVideo from 'src/components/ListVideo'
  import Categories from 'src/components/Categories'

  export default {
    name: 'category',
    computed: {
      ...mapGetters(['videos', 'topCategories'])
    },
    methods: {
      ...mapActions(['getTopCategories', 'getVideosForCategory'])
    },
    components: {
      ListVideo,
      Categories
    },
    created () {
      this.getVideosForCategory(this.$route.params.id)
      this.getTopCategories()
    },
    watch: {
      // call again the method if the route changes
      '$route': function () {
        this.getVideosForCategory(this.$route.params.id)
        this.getTopCategories()
      }
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
