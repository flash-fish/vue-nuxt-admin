<template>
  <div class="job-img" :class="styleObj">
    <!-- prettier-ignore -->
    <a v-if="links" :href="href">
      <img :src="src">
    </a>
    <!-- prettier-ignore -->
    <img v-else :src="src" @click="clicks" >
  </div>
</template>

<script>
export default {
  name: 'JobImg',

  props: {
    src: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false,
      default: ''
    },
    sty: {
      type: Object,
      required: false,
      default: function() {
        return {}
      }
    }
  },

  data() {
    return {}
  },

  computed: {
    links() {
      return this.href.length > 0
    },
    styleObj() {
      return {
        cursors: this.sty.cursors
      }
    }
  },

  methods: {
    clicks() {
      this.$emit('top')
    }
  }
}
</script>

<style lang="less" scoped>
.job-img {
  .cursors {
    cursor: pointer;
  }
}
</style>
