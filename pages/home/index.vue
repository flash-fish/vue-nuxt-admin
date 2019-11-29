<template>
  <div style="background-color: #ffffff; padding: 20px;">
    <template>
      <a-row :gutter="16">
        <job-spin :loading="loading">
          <a-col
            :span="8"
            v-for="item in templateData.data"
            :key="item.templateName"
          >
            <a-card :title="item.templateName" :bordered="true">
              <p>{{ item.templateName }}</p>
              <p>{{ item.description }}</p>
            </a-card>
          </a-col>
        </job-spin>
      </a-row>
    </template>
  </div>
</template>

<script>
import { mixin } from '~/utils/mixin'
import { urls } from '~/utils/_util/api'
export default {
  mixins: [mixin],

  data() {
    return {
      templateData: {},
      loading: true
    }
  },

  mounted() {
    this.getInfo()
  },

  computed: {},

  methods: {
    getInfo: async function() {
      const params = Object.assign(
        {},
        {
          userId: '007',
          name: 'charies'
        }
      )
      const { data } = await this.$axios.post(urls.templateList, params)
      this.templateData = _.cloneDeep(data)
      const Bol = Object.getOwnPropertyNames(this.templateData)
      this.loading = !Bol.length > 0
    }
  }
}
</script>
