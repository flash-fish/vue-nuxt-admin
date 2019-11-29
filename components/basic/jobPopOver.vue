<template>
  <div class="job-popover">
    <a-popover :title="title" :placement="dire">
      <template slot="content">
        <slot name="main" />
      </template>
      <slot />
    </a-popover>
  </div>
</template>

<script>
export default {
  name: 'JobPopOver',

  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    dire: {
      type: String,
      required: false,
      default: 'topRight'
    }
  }
}
</script>

<style lang="less" scoped>
.job-popover {
  padding: 5px 0;
}
</style>
