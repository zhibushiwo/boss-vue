<template>
  <van-tabbar class="footer" route active-color="#444" :safe-area-inset-bottom="true">
    <van-tabbar-item replace :to="item.to" v-for="(item, index) in navs" :key="index">
      <span>{{item.title}}</span>
      <template #icon="props">
        <base-icon :type="props.active?item.active_icon:item.icon " size="22" :badge="item.dot" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          title: "职位",
          to: "/job",
          icon: "home",
          active_icon: "home-fill"
        },
        {
          title: "发现",
          to: "/find",
          icon: "tags",
          active_icon: "tags-fill"
        },
        {
          title: "消息",
          to: "/message",
          icon: "message",
          active_icon: "message-fill"
        },
        {
          title: "我的",
          to: "/profile",
          icon: "meh",
          active_icon: "meh-fill",
          dot: true
        }
      ]
    };
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.footer {
  ::v-deep .van-tabbar-item__text {
    transform: scale(0.75);
  }
}
</style>
