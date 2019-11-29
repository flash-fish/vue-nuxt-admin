import { layout } from '~/utils/config'

export const mixin = {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}

export const layouts = {
  layout: layout
}
