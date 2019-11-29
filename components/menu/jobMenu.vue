<template>
  <div>
    <a-menu
      :defaultSelectedKeys="[initSelectKeys]"
      :defaultOpenKeys="['']"
      mode="inline"
      theme="light"
      :inlineCollapsed="collapsed"
    >
      <template v-for="item in menuList">
        <template v-if="item.children">
          <a-sub-menu :key="item.key">
            <span slot="title">
              <a-icon v-if="item.icon" :type="item.icon" />
              <span>{{ item.name }}</span>
            </span>
            <template v-for="sub in item.children">
              <a-menu-item :key="sub.key">
                <nuxt-link :to="item.path">
                  {{ sub.name }}
                </nuxt-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
        <template v-else>
          <a-menu-item :key="item.key">
            <nuxt-link :to="item.path">
              <a-icon v-if="item.icon" :type="item.icon" />
              <span>
                {{ item.name }}
              </span>
            </nuxt-link>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    menuList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      initSelectKeys: '1'
    }
  },
  watch: {
    $router: {
      handler: function(n) {
        if (!n) return
        const currRouter = n.history.current.path
        const List = this.menuList
        this.initSelectKeys = List.filter(s => s.path === currRouter)[0].key
      },
      immediate: true
    }
  },
  methods: {}
}
</script>
