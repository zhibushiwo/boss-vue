<template>
  <div>
    <div class="title">
      <img :src="img" alt srcset />
      <span>{{type}}</span>
    </div>
    <div class="list">
      <Item class="list-item" :name="item" v-for="(item, index) in list" :key="index" />
    </div>
  </div>
</template>

<script>
import Item from "./CatelogyItem";
import img from "@/assets/images/technology.png";
export default {
  props: {
    type: {
      type: String
    },
    list: {
      type: Array
    }
  },
  data() {
    return {
      img
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Item
  }
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  margin: 10px 0;
  img {
    width: 50px;
    margin-right: 15px;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    margin-right: 15px;
  }
}
</style>
