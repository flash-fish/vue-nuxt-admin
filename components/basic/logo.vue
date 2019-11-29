<template>
  <div>
    <div v-if="!menuCollapsed" class="logo">
      <nuxt-link :to="'/home'">
        <h2>
          {{ little }}
        </h2>
      </nuxt-link>
    </div>
    <div v-else class="small-logo">
      <!-- prettier-ignore -->
      <img :src="require(`~/static/logo/logo.png`)">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'logo',
  data() {
    return {
      little: '活动模板'
    }
  },
  computed: {
    ...mapState(['menuCollapsed'])
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  background: #e6f7ff;
  overflow: hidden;

  img,
  h1 {
    display: inline-block;
    vertical-align: middle;
  }

  img {
    height: 32px;
  }

  h2 {
    color: #0981fa;
    font-size: 17px;
    position: absolute;
    left: 74px;
    top: 0;
    font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 600;
  }
  h5 {
    color: #fff;
    font-size: 12px;
    letter-spacing: 6px;
    position: absolute;
    left: 74px;
    top: 5px;
    font-family: 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue',
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-weight: 600;
  }
}
.small-logo {
  height: 64px;
  padding: 10px 0 10px 20px;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
