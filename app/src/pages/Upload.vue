<template>
  <div class="container">

    <div class="form-group">
      <label for="title">Video title</label>
      <input v-model="title" type="text" class="form-control" id="title" placeholder="Video title">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea v-model="description" class="form-control" id="description" rows="3"> </textarea>
    </div>
    <div class="form-group">
      <label for="video">Video file</label>
      <input type="file" ref="video" class="form-control-file" id="video" aria-describedby="videoHelp">
      <small id="videoHelp" class="form-text text-muted">Video files supported are mp4, webm</small>
    </div>
    <!--<div class="form-check">
      <label class="form-check-label">
        <input v-model="private" type="checkbox" class="form-check-input">
        Private video
      </label>
    </div>-->
    <div class="form-group">
      <label for="categories">Add Categories</label>
      <multiselect v-model="categories" :multiple="true" :searchable="true" :internal-search="false"
                   :clear-on-select="true" :close-on-select="true"
                   track-by="name"
                   label="name"
                   id="categories"
                   :loading="isLoading"
                   placeholder="Select category"
                   tag-placeholder="Add this as new category"
                   :taggable="true"
                   :options="foundCategories"
                   @tag="addCategory"
                   @search-change="find">
        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
      </multiselect>
    </div>
    <button type="submit" class="btn btn-primary" @click="upload">Submit</button>

    <!-- Upload progress modal -->
    <div class="modal fade" ref="progressModal" id="progressModal" tabindex="-1" role="dialog"
         aria-labelledby="progressModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="progressModalTitle">Upload in progress</h5>
          </div>
          <div class="modal-body">
            <div class="progress">
              <div class="progress-bar" role="progressbar" :style="{ width: progress + '%'}" :aria-valuenow="progress"
                   aria-valuemin="0" :aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { uploadVideo } from 'src/api/video'
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'video',
    components: {
      Multiselect
    },
    computed: {
      ...mapGetters(['foundCategories'])
    },
    data: function () {
      return {
        title: '',
        description: '',
        private: false,
        progress: 0,
        categories: [],
        isLoading: false
      }
    },
    methods: {
      upload: function () {
        const formData = new FormData()

        formData.append('title', this.title)
        formData.append('description', this.description)
        formData.append('private', this.private ? '0' : '1')
        formData.append('categories', this.categories.map(({name}) => name).join(','))
        formData.append('video', this.$refs.video.files[0])

        $(this.$refs.progressModal).modal('show')
        uploadVideo(formData, (progress) => {
          this.progress = (progress.loaded / progress.total) * 100
        })
        .then((video) => {
          $(this.$refs.progressModal).modal('hide')
          this.$router.push({name: 'Video', params: {id: video.id}})
        })
        .catch(() => {
          $(this.$refs.progressModal).modal('hide')
        })
      },
      find: function (name) {
        this.findCategories(name)
        .then(res => console.log(res))
      },
      addCategory: function (name) {
        this.categories.push({name})
      },
      ...mapActions(['findCategories'])
    }
  }
</script>
