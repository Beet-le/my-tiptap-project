<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="show('a')">A页面</button>
      <button @click="show('b')">B页面</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    msg: String,
  },
  methods: {
    show(index) {
      if (index == "a") {
        this.$router.push("/index");
      }
      if (index == "b") {
        this.$router.push("/OpenWindow");
      }
      if (index == "2") {
        
      }
    },
  },
};
</script>

<style>
</style>