<template>

  <div class="alert-wrapper">
    <alert
        :show.sync="alert.show"
        :duration="alert.duration"
        :type="alert.type"
        :alert="alert"
        width="auto"
        v-for="alert in alerts"
        :key="alert.id"
    >
      <span class="icon-info-circled alert-icon-float-left"></span>
      <div>
        <strong>{{ alert.title }}!</strong> {{ alert.message }}

        <div v-if="alert.actions.length > 0" class="btn-group btn-group-xs pull-right btn-group-alerts" role="group"
             aria-label="...">
          <a v-link="button.link" type="button" class="btn" :class="'btn-'+button.type" v-for="button in alert.actions">
            {{button.text}} <i v-if="button.icon" class="fa fa-fw" :class="'fa-'+button.icon"></i>
          </a>
        </div>
      </div>
    </alert>
  </div>

</template>

<style lang="sass">
  .alert-wrapper
    z-index: 1100
    position: fixed
    bottom: 3em
    left: 3em
    min-width: 20em
    max-width: 50em
    display: flex
    flex-direction: column-reverse
    align-items: flex-start

    .btn-group-alerts
      margin-left: 1em
      border: 1px solid #f3f3f3

</style>

<script>
  import Alert from 'src/components/Alert'
  import { mapGetters } from 'vuex'

  export default{
    computed: {
      ...mapGetters(['alerts'])
    },
    components: {
      Alert
    }
  }
</script>
