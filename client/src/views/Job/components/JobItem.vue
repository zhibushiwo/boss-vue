<template>
  <div class="jobItem">
    <div class="title">
      <h2 class="name">{{name}}</h2>
      <div class="money">{{money}}</div>
    </div>
    <div class="tags">
      <base-tag v-for="(item, index) in sTags" :key="index">{{item}}</base-tag>
    </div>
    <div class="company">
      <span v-for="(item, index) in sCompany" :key="index">{{item}}</span>
    </div>
    <div class="info">
      <div class="public">
        <base-avatar class="avatar" :img="avatar" width="30" />
        <span>{{publis.name}}</span>
        <span class="point">·</span>
        <span>{{publis.job}}</span>
      </div>
      <div class="location">{{location}}</div>
    </div>
  </div>
</template>

<script>
import avatar from "@/assets/avatar.jpg";
export default {
  props: {
    name: {
      type: String
    },
    money: {
      type: String
    },
    tags: {
      type: Array
    },
    conpanyInfo: {
      type: Array
    },
    location: {
      type: String
    },
    publis: {
      type: Object
    }
  },
  data() {
    return {
      avatar
    };
  },
  computed: {
    sTags() {
      return this.tags.slice(0, 5);
    },
    sCompany() {
      return this.conpanyInfo.slice(0, 3);
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.jobItem {
  background: #fff;
  margin-bottom: 7px;
  padding: 12px;
  color: #333;
  .title {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .name {
      font-size: 20px;
    }
    .money {
      color: $theme-color;
      font-size: 18px;
    }
  }
  .tags {
    font-size: 12px;
    margin: 10px 0;
  }
  .company {
    margin: 10px 0;
    span {
      margin-right: 10px;
      color: #333;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    .public {
      @include flex-center();
      .avatar {
        margin-right: 6px;
      }
      .point {
        font-weight: 600;
        margin:0 2px;
      }
    }
    .location {
      color: #888;
    }
  }
}
</style>
