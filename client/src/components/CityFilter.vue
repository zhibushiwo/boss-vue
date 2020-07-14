<template>
  <Search :show="show" @close="show=false" :showFoot="false">
    <template #title>
      <h4>宁波</h4>
    </template>
    <div class="content">
      <van-index-bar>
        <van-index-anchor index="A" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="B" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="C" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="D" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="E" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="F" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-index-anchor index="G" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="H" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />

        <van-index-anchor index="I" />
        <van-cell title="文本" />
        <van-cell title="文本" />
        <van-cell title="文本" />
      </van-index-bar>
    </div>
  </Search>
</template>

<script>
import { getCities } from "@/api";
import Search from "@/components/Search";
export default {
  name: "CityFilter",
  props: {},
  data() {
    return {
      show: false
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    open() {
      this.show = true;
    },
    async getData() {
      let data = await getCities();
      console.log(data);
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  height: 100%;
  ul {
    padding: 0 9px;
    li {
      margin: 12px 0 24px;
      &.select {
        color: $theme-color;
      }
    }
  }
  .type {
    flex: 3;
    background: $grey;
  }
  .location {
    flex: 4;
  }
  .detail {
    flex: 4;
  }
}
</style>
