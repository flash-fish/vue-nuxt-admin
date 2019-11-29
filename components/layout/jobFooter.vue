<template>
  <a-layout-footer>
    <row-box :span="4" :offset="8">
      <span>{{ footerText }}</span>
    </row-box>
  </a-layout-footer>
</template>

<script>
export default {
  name: 'jobFooter',
  data() {
    return {
      footerText: '@copyright 51job'
    }
  }
}
</script>
