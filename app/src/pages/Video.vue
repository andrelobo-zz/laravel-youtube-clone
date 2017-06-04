<template>
  <div class="container">

    <div class="card">
      <video class="card-img-top embed-responsive responsive-embed-16by9" controls v-if="loaded">
        <source :src="video.file">
        Problem with video
      </video>
      <div class="card-block">
        <p class="card-text categories">
          <router-link :to="{ name: 'Category', params: { id: category.id }}"
                       v-for="category in video.categories"
                       key="id">
            <span class="badge badge-default">{{category.name}}</span>
          </router-link>
        </p>
        <h4 class="card-title">{{ video.title }}</h4>
        <p class="card-text">{{ video.description }}</p>
        <p class="card-text">
          <small class="text-muted">Uploaded by
            <router-link :to="{ name: 'User', params: { id: video.user.uuid } }">{{video.user.name}}</router-link>
            at {{ video.created_at }}
          </small>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
  import { getVideo } from 'src/api/video'
  import { mapGetters } from 'vuex'

  export default {
    name: 'video',
    computed: {
      ...mapGetters(['video'])
    },
    data: function () {
      return {
        loaded: false
      }
    },
    mounted () {
      getVideo(this.$route.params.id)
      .then(() => {
        this.loaded = true
      })
    }
  }
</script>

<style lang="sass" scoped>
  .categories
    a
      margin-right: 0.25em
</style>
