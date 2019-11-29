<template>
  <div class="tem-one">
    <template>
      <div class="float-layer">
        <nav-float :list="cityDetail.one.floatList">
          <job-img
            :src="require(`~/${url.one.navTop}.png`)"
            @top="top"
            :sty="extraImg"
          />
        </nav-float>
      </div>
    </template>
  </div>
</template>

<script>
import { layouts, mixin } from '~/utils/mixin'
import { apiCommon } from '~/utils/_tem'
import { cityDetail } from '~/utils/_tem/data'
const url = {
  one: {
    headerImg: 'static/_common/logo_51',
    headerTitleOne: 'static/one/tem-one-title-one',
    navBg: 'static/one/tem-nav-one-bg',
    navTop: 'static/one/temp-one-top-button'
  }
}
export default {
  mixins: [layouts, mixin],

  data() {
    return {
      extraImg: {
        cursors: true
      },
      url,
      conf: {},
      cityDetail
    }
  },

  mounted() {
    this.conf = apiCommon
  },

  computed: {
    headContentOneObj() {
      return {
        headContentStyle: true
      }
    }
  },

  methods: {
    top() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.tem-one {
  min-width: 100vw;
  min-height: 100vh;
  background-repeat: no-repeat;

  .float-layer {
    width: image-width('../../static/one/temp-one-top-button.png');
  }
}
</style>
