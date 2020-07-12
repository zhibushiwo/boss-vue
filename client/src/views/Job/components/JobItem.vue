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
        <span>{{publis.name}}</span>·
        <span>{{publis.job}}</span>
      </div>
      <div class="location">{{location}}</div>
    </div>
  </div>
</template>

<script>
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
    return {};
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
  .title {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .name {
      font-weight: 600;
      font-size: 22px;
    }
    .money {
      color: $theme-color;
      font-size: 20px;
      font-weight: 600;
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
    .location {
      color: #888;
    }
  }
}
</style>
