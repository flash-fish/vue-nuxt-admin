<template>
  <div class="cards" style="background-color: #ececec; padding: 20px;">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="圈形的进度" :bordered="false">
          <template>
            <div>
              <a-progress type="circle" :percent="75" />
              <a-progress type="circle" :percent="70" status="exception" />
              <a-progress type="circle" :percent="100" />
            </div>
          </template>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="指定格式" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <template>
            <div>
              <a-spin size="small" />
              <a-spin />
              <a-spin size="large" />
            </div>
          </template>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mixin } from '../../utils/mixin'
export default {
  mixins: [mixin]
}
</script>

<style lang="less" scoped>
.cards {
  .ant-progress-circle-wrap,
  .ant-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
  div.ant-progress-circle,
  div.ant-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>
