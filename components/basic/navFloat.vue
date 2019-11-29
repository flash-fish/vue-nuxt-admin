<template>
  <!-- prettier-ignore -->
  <div
    class="nav-float"
    :style="{ background: 'url(' + require(`~/${Img.background}.png`) + ')' }"
    :class="classObject"
  >
    <ul>
      <li v-for="item in list" :key="item.i">
        {{ item.city }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
const Img = {
  background: 'static/one/tem-nav-one-bg'
}
export default {
  name: 'NavFloat',

  data() {
    return {
      Img
    }
  },

  props: {
    list: {
      type: Array,
      required: false,
      default: function() {
        return []
      }
    }
  },

  computed: {
    classObject() {
      return {
        border: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.nav-float {
  position: fixed;
  left: 5%;
  top: 30%;
  width: 100px;
  height: 400px;
  text-align: center;
  cursor: pointer;
  z-index: 999;
  ul {
    padding-left: 20px;

    li {
      list-style: none;
      position: relative;
      width: 60px;
      text-align: center;
      height: 47px;
      line-height: 47px;
      margin-bottom: 1px;
      color: #ffffff;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px#ffffff solid;
    }
  }
}
</style>
