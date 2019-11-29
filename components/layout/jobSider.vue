<template>
  <a-layout-sider class="sider" :width="siderWidth" :collapsed="menuCollapsed">
    <slot />
    <job-menu :collapsed="menuCollapsed" :menuList="newList" />
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import { style } from 'utils/constant'
import jobMenu from '../menu/jobMenu'

export default {
  name: 'jobSider',

  components: {
    jobMenu
  },

  data: function() {
    return {
      siderWidth: style.siderWidth
    }
  },
  mounted() {},

  computed: {
    newList() {
      const currList = this.$store.state.siderMenuList
      return !currList ? [] : currList
    },
    ...mapState(['menuCollapsed'])
  }
}
</script>

<style lang="less">
.sider {
  background: #fff;
  min-height: 100vh;
  overflow-y: auto;
}
</style>
