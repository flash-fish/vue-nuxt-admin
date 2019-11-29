<template>
  <a-spin :spinning="loading">
    <div v-if="content" class="spin-content">
      <slot />
    </div>
    <div v-else>
      <slot />
    </div>
  </a-spin>
</template>

<script>
export default {
  name: 'JobSpin',

  props: {
    loading: {
      type: Boolean,
      required: false,
      default: true
    },
    content: {
      type: Boolean,
      required: false,
      default: true
    }
  }
}
</script>
