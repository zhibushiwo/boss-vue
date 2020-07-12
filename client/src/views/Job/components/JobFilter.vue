<template>
  <div class="filter">
    <div class="left">
      <span
        v-for="(item, index) in type"
        :key="index"
        @click="handleTypeChange(item)"
        :class="{active:item===cur}"
      >{{item}}</span>
    </div>
    <div class="right">
      <base-tag class="filter-tag" @click="selectCity">
        <span>宁波</span>
      </base-tag>
      <base-tag class="filter-tag" @click="selectFilter">
        <span>筛选</span>
      </base-tag>
      <base-tag class="filter-tag" @click="selectKeyword">
        <span>关键词</span>
      </base-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobFilter",
  props: {},
  data() {
    return {
      type: ["推荐", "附近", "最新"],
      cur: "推荐"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleTypeChange(type) {
      this.cur = type;
    },
    selectCity() {
      console.log("selectCity");
    },
    selectFilter() {
      console.log("selectFilter");
    },
    selectKeyword() {
      console.log("selectKeyword");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.filter {
  background: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $grey;
  .left {
    display: flex;
    justify-content: space-around;
    width: 40%;
    span {
      color: #888;
      &.active {
        color: #000;
        font-weight: 600;
      }
    }
  }
  .right {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    .filter-tag {
      margin-left: 8px;
      span {
        position: relative;
        display: inline-block;
        padding-right: 5px;
        &::after {
          content: "";
          position: absolute;
          right: -3px;
          bottom: 0;
          width: 0;
          height: 0;
          border-bottom: 5px solid #848484;
          border-left: 5px solid transparent;
        }
      }
    }
  }
}
</style>
