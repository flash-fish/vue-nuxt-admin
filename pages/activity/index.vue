<template>
  <div class="home-content">
    <job-card slot="temSelf" :list="oneInfo">
      <template>
        <job-pop-over :dire="popOverConf.direction" :title="'模板'">
          <template slot="main">
            <p>模板1</p>
          </template>
          <a-button type="primary" @click="goBlank">详情</a-button>
        </job-pop-over>
      </template>
    </job-card>
  </div>
</template>

<script>
import { mixin } from '~/utils/mixin'
import { templateId } from '~/utils/constant'
import { temInfo } from '~/utils/_tem/data'
export default {
  mixins: [mixin],
  data() {
    return {
      templateList: templateId,
      oneInfo: temInfo.one,
      popOverConf: {
        direction: 'right'
      }
    }
  },
  mounted() {},
  methods: {
    goBlank(ele) {
      window.open('/template/tem-one', '_blank')
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
