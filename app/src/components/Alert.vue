<template>
  <div
      v-if="show"
      :class="{
      'alert'        : true,
      'alert-success': (type == 'success'),
      'alert-warning': (type == 'warning'),
      'alert-info'   : (type == 'info'),
      'alert-danger' : (type == 'danger')
    }"
      :style="{width:width}"
      role="alert">
    <button v-show="dismissable" type="button" class="close" @click="show = false">
      <span>&times;</span>
    </button>
    <slot></slot>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      type: {
        type: String
      },
      dismissable: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: true
      },
      duration: {
        type: Number,
        default: 0
      },
      width: {
        type: String
      },
      alert: {
        type: Object
      }
    },
    data () {
      return {
        alertLeave: false
      }
    },
    ready: function () {
      if (this.show && Boolean(this.duration)) {
        setTimeout(() => {
          if (this.alert) {
            this.hideAlert(this.alert)
          } else {
            // If alert isn't part of Alerts
            this.hide()
          }
        }, this.duration)
      }
    },
    methods: {
      hide () {
        this.show = false
      },
      ...mapActions(['hideAlert'])
    }
  }
</script>

<style>
  .fade-transition {
    transition: opacity .3s ease;
  }

  .fade-enter,
  .fade-leave {
    height: 0;
    opacity: 0;
  }
</style>
