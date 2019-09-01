<template>
  <ul class="list">
    <li v-for="(item,index) of list" :key="index">{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      list: ["张三", "李四", "王五"]
    };
  }
};
</script>
<style scoped>
.list li {
  font-size: 16px;
  color: green;
  line-height: 3em;
  border-bottom: 1px solid #ddd;
}
</style>

