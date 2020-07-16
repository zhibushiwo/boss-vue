<template>
  <Search :show="show" @close="show=false" @clear="clearAll" @confrim="confirm">
    <template #title>
      <h4>
        筛选
        <span v-if="filterLength>0">
          ·
          <span class="count">{{filterLength}}</span>
        </span>
      </h4>
    </template>
    <div class="content">
      <div v-for="(item, index) in filterTypes" :key="index">
        <h4 class="title">
          {{item.type}}
          <span v-if="item.single" class="tip">(单选)</span>
        </h4>
        <div class="tagWrap">
          <base-tag
            class="tags"
            :class="{active:item.select.length==0}"
            @click="clearFilter(index)"
          >不限</base-tag>
          <base-tag
            class="tags"
            :class="{active:item.select.includes(val)  }"
            @click="handleSelect(index,val)"
            v-for="(val, idx) in item.filter"
            :key="idx"
          >{{val}}</base-tag>
        </div>
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
      filterTypes: [
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
          ],
          select: []
        },
        {
          type: "学历要求",
          filter: [
            "初中及以下",
            "中专/中技",
            "高中",
            "大专",
            "本科",
            "硕士",
            "博士"
          ],
          select: []
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
          ],
          select: [],
          single: true
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
          ],
          select: []
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
          ],
          select: []
        }
      ]
    };
  },
  computed: {
    filterLength() {
      return this.filterTypes.reduce((acc, cur) => acc + cur.select.length, 0);
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    open() {
      this.show = true;
    },
    clearFilter(idx) {
      this.filterTypes[idx].select = [];
    },
    clearAll() {
      this.filterTypes.map(item => {
        item.select = [];
      });
    },
    confirm() {
      let filter = this.filterTypes
        .map(({ type, select }) => ({
          type,
          select
        }))
        .filter(({ select }) => select.length > 0);
      this.$emit("select", filter);
    },
    handleSelect(typeIndex, val) {
      let cur = Object.assign({}, this.filterTypes[typeIndex]);
      let idx = cur.select.findIndex(item => item == val);
      if (idx > -1) {
        cur.select.splice(idx, 1);
      } else {
        if (cur.single) {
          cur.select.splice(0, 1, val);
        } else {
          cur.select.push(val);
        }
      }
      this.filterTypes.splice(typeIndex, 1, cur);
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.count {
  color: $theme-color;
}
.content {
  padding: 8px;
  .title {
    font-size: 16px;
    margin: 8px;
    .tip {
      font-weight: 100;
      margin-left: 5px;
      font-size: 10px;
    }
  }
  .tagWrap {
    display: flex;
    flex-wrap: wrap;
    .tags {
      width: 23vw;
      margin-left: 0;
      margin-bottom: 10px;
      text-align: center;
      padding: 10px;
      border: 1px solid #fff;
      margin-right: 10px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &.active {
        border: 1px solid $theme-color;
        color: $theme-color;
        background: #fff;
      }
    }
  }
}
</style>
