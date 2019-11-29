<template>
  <a-locale-provider :locale="locale">
    <a-layout class="job-container">
      <job-sider>
        <logo />
      </job-sider>
      <a-layout>
        <job-header />
        <a-layout-content>
          <nuxt />
        </a-layout-content>
        <job-footer />
      </a-layout>
    </a-layout>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import jobSider from '../components/layout/jobSider'
import jobHeader from '../components/layout/jobHeader'
import jobFooter from '../components/layout/jobFooter'
import logo from '../components/basic/logo'
export default {
  components: {
    jobSider,
    jobHeader,
    jobFooter,
    logo
  },

  data() {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="less">
.job-container {
  .ant-layout-header {
    padding: 0 30px;
  }

  .ant-layout-content {
    margin: 24px 24px 0;
    height: 100%;
  }
}
</style>
