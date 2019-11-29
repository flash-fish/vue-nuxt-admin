<template>
  <a-icon
    class="trigger"
    :type="menuCollapsed ? 'menu-unfold' : 'menu-fold'"
    @click="toggle(!menuCollapsed)"
  />
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { _debounce } from '~/utils/_util/utils'
import { CHANGE_MENU_COLLAPSED } from '~/utils/types/mutation-types'
export default {
  name: 'jobToggleMenu',

  data() {
    return {
      screenWidth: document.body.clientWidth
    }
  },

  mounted() {
    const _this = this
    window.onresize = () => {
      return _debounce(() => {
        // window.screenWidth 当前屏幕宽度 网页可见区域宽：document.body.clientWidth
        window.screenWidth = document.body.clientWidth
        _this.screenWidth = window.screenWidth
      }, 300)()
    }
  },

  watch: {
    screenWidth(val) {
      // 当前页面值小于700触发vuex状态改变
      this.$store.commit(CHANGE_MENU_COLLAPSED, val <= 700)
    }
  },

  computed: {
    ...mapState(['menuCollapsed'])
  },

  methods: {
    // testApi: async function() {
    //   const { data } = await this.$axios.post('/api/testurl')
    // }
    // VUEX里的写法 toggle 映射mutation 'CHANGE_MENU_COLLAPSED'
    ...mapMutations({
      toggle: CHANGE_MENU_COLLAPSED
    })
  }
}
</script>

<style lang="less" scoped>
.trigger {
  cursor: pointer;
  color: #2a96ff;
}
</style>
