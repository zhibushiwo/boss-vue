<template>
  <van-popup :value="show" position="bottom" :style="{ height: '100%' }">
    <div class="searcher">
      <div class="search-header">
        <base-icon type="close" @click="handleClick"></base-icon>
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="button">
          <slot name="button"></slot>
        </div>
      </div>
      <div class="search-content">
        <slot></slot>
      </div>
      <div class="search-footer van-hairline--top" v-if="showFoot">
        <div class="left">
          <van-button block type="default">清除</van-button>
        </div>
        <div class="right">
          <van-button block color="#37c2bb">确定</van-button>
        </div>
      </div>
    </div>
  </van-popup>
</template>
<script>
export default {
  props: {
    showFoot: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleClick() {
      this.$emit("close");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.searcher {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search-header {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 8px;
    .title {
      font-size: 18px;
    }
  }
  .search-content {
    flex: 1;
    overflow: auto;
  }
  .search-footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 8px;
    .left {
      width: 24%;
    }
    .right {
      width: 60%;
    }
  }
}
</style>
