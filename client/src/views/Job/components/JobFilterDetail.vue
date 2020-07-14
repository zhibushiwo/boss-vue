<template>
  <Search :show="show" @close="show=false">
    <template #title>
      <h4>
        筛选
        <span>
          ·
          <span></span>
        </span>
      </h4>
    </template>
    <div class="content">
      <div v-for="(item, index) in filters" :key="index">
        <h4 class="title">{{item.type}}</h4>
        <base-tag class="tags active">不限</base-tag>
        <base-tag class="tags" v-for="(f, idx) in item.filter" :key="idx">{{f}}</base-tag>
      </div>
    </div>
  </Search>
</template>

<script>
import Search from "@/components/Search";
export default {
  props: {},
  data() {
    return {
      show: false,
      filters: [
        {
          type: "经验要求",
          filter: [
            "在校生",
            "应届生",
            "1年以内",
            "1-3年",
            "3-5年",
            "5-10年",
            "10年以上"
          ]
        },
        {
          type: "学历要求",
          filter: [
            "不限",
            "初中及以下",
            "中专/中技",
            "高中",
            "大专",
            "本科",
            "硕士",
            "博士"
          ]
        },
        {
          type: "薪资待遇",
          filter: [
            "3K以下",
            "3-5K",
            "5-10K",
            "10-15K",
            "15-20K",
            "20-30K",
            "30-50K",
            "50K以上"
          ]
        },
        {
          type: "规模",
          filter: [
            "0-20人",
            "20-99人",
            "100-499人",
            "500-999人",
            "1000-9999人",
            "10000人以上"
          ]
        },
        {
          type: "融资阶段",
          filter: [
            "未融资",
            "天使轮",
            "A轮",
            "B轮",
            "C轮",
            "D轮及以上",
            "已上市",
            "不需要融资"
          ]
        }
      ],
      selected:[]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    open() {
      this.show = true;
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 8px;
  .title {
    font-size: 16px;
    margin: 8px;
  }
  .tags {
    width: 23vw;
    margin-bottom: 10px;
    text-align: center;
    padding: 10px;
    &.active {
      border: 1px solid $theme-color;
      color: $theme-color;
      background: #fff;
    }
  }
}
</style>
