<template>
  <div class="home">
    <van-notice-bar closeable :scrollable="false" left-icon="cross" text="下载APP，及时回复BOSS信息，早点给你福报" />
    <div class="banner">
      <div class="title">
        <div class="main">找工作和BOSS谈</div>
        <div class="sub">BOSS直聘</div>
      </div>
      <van-search
        @search="$router.push('./job')"
        class="search"
        background="#00000000"
        v-model="searchValue"
        placeholder="搜索职位/公司"
      />
    </div>
    <div class="main">
      <CatelogyList :type="item.type" :list="item.list" v-for="(item, index) in jobs" :key="index" />
    </div>
    <div class="footer">
      <p>违法和不良信息举报邮箱：jubao@kanzhun.com</p>
      <p>企业服务热线和举报投诉：400 065 5799</p>
      <p>人力资源服务许可证</p>
      <p>网上有害信息举报专区</p>
    </div>
  </div>
</template>
<script>
import CatelogyList from "./components/CatelogyList";
export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      jobs: [
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据挖掘", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        },
        {
          type: "技术",
          list: ["Web前端", "Java", "PHP", "大数据", "Python", "IOS"]
        }
      ]
    };
  },
  components: { CatelogyList }
};
</script>
<style lang="scss" scoped>
.home {
  .banner {
    height: 200px;
    background-image: url("../../assets/images/home-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    @include flex-center(column);
    .title {
      text-align: center;
      margin: 10px;
      .main {
        font-size: 28px;
        margin-bottom: 7px;
      }
      .sub {
        font-size: 20px;
      }
    }
    .search {
      width: 90vw;
    }
  }
  .main {
    padding: 12px 15px;
  }
  .footer {
    text-align: center;
    font-size: 11px;
    color: #7e8793;
    line-height: 1.5;
    margin-bottom: 10px;
  }
}
</style>
