<template>
  <div>
    <a-row>
      <a-col :span="span" :offset="offset">
        <slot />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'RowBox',

  props: {
    span: {
      type: Number,
      required: false,
      default: 8
    },
    offset: {
      type: Number,
      required: false,
      default: 8
    }
  },

  data() {
    return {}
  },

  computed: {
    styleObj() {
      return {
        rowBoxStyle: true
      }
    }
  },

  methods: {
    clicks() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.row-box {
  .cursors {
    cursor: pointer;
  }
}
</style>
