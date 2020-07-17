<template>
  <div class="profile">
    <div class="header"></div>
    <van-cell title="求职助手" is-link value="其他/钱包" icon="cash-back-record"></van-cell>
    <van-cell title="附件建立" is-link value="未上传">
      <template #icon>
        <van-icon name="cash-back-record" />
      </template>
    </van-cell>
    <van-cell title="管理求职意向" is-link value="在职-考虑机会">
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="我的发现" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="个人主页" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="牛人回答" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="提升建立曝光" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="帮助与反馈" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="我的客服" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
    <van-cell title="关于" is-link>
      <template #icon>
        <base-icon type="report"></base-icon>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.profile {
  .header {
    background: $theme-color;
    height: 40vh;
  }
}
</style>
