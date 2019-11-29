<template>
  <div class="job-card">
    <template v-for="item in list">
      <a-card :key="item.key" hoverable style="width: 200px">
        <template v-if="item.src">
          <!-- prettier-ignore -->
          <img :src="item.src">
        </template>
        <a-card-meta :title="item.title" :description="item.desc" />
        <slot />
      </a-card>
    </template>
  </div>
</template>

<script>
export default {
  name: 'JobCard',

  props: {
    list: {
      type: Array,
      required: false,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.job-card {
  .ant-card {
    .ant-card-body {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin-bottom: 20px;
        margin-left: 39px;
        height: 222px;
      }
    }
  }
}
</style>
