<template>
  <button @click="isScreenFull">
      <p>全屏</p>
  </button>
</template>
<script>
import screenfull from "screenfull";
export default {
  name: 'OpenWindow',
    data() {
    return {
      isFullscreen: false
    };
  },
  methods: {
      //全屏方法
    isScreenFull() {
      // 需要注意的是 如果判断!screenfull.enabled 显示的是不支持全屏的话 是因为谷歌的版本问题  判断改为 !screenfull.isEnabled  就可以了
      if (!screenfull.isEnabled) {
        // 如果不支持进入全屏，发出不支持提示
        this.$message({
          message: "您的浏览器版本过低不支持全屏显示！",
          type: "warning"
        });
        return false;
      }
      screenfull.toggle();
    }
  }
}
</script>

<style>

</style>