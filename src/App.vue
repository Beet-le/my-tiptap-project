<template>
  <div id="app">
    <!-- <index class="index_style"></index>
    <div>
      <tiptap />
    </div> -->
    <index></index>
    <router-view></router-view>
  </div>
  
</template>

<script>
import index from './components/index.vue'
export default {
  name: "App",
  components: {
    // Tiptap,
     index,
  },
};
</script>
<style scoped>
.index_style {
  width: 60%;
  margin: 0 auto;
}
</style>