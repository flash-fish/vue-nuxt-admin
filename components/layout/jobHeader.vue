<template>
  <a-layout-header class="job-header">
    <job-toggle-menu />
    <job-user-info />
  </a-layout-header>
</template>

<script>
import jobToggleMenu from '../../components/basic/jobToggle'
import jobUserInfo from '../../components/basic/jobUserInfo'
export default {
  name: 'jobHeader',

  components: {
    jobToggleMenu,
    jobUserInfo
  }
}
</script>

<style lang="less">
.job-header {
  font-size: 16px;
  background: #ffffff;
}
</style>
