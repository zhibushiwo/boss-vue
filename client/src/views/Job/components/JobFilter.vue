<template>
  <div class="filter van-hairline--bottom">
    <div class="left">
      <span
        v-for="(item, index) in type"
        :key="index"
        @click="handleTypeChange(item)"
        :class="{active:item===cur}"
      >{{item}}</span>
    </div>
    <div class="right">
      <base-tag class="filter-tag" @click="showCity">
        <span>{{CurCity}}</span>
      </base-tag>
      <base-tag class="filter-tag" @click="showFilter">
        <span>筛选</span>
      </base-tag>
      <base-tag class="filter-tag" @click="showKeyword">
        <span>关键词</span>
      </base-tag>
    </div>
    <LocationFilter ref="locationFilter" />
    <JobFilterDetail ref="jobFilterDetail" @select="selectFilter" />
    <KeywordFilter ref="keywordFilter" @select="selectKeyWord" />
  </div>
</template>

<script>
import LocationFilter from "./LocationFilter";
import JobFilterDetail from "./JobFilterDetail";
import KeywordFilter from "./KeywordFilter";

import { mapGetters } from "vuex";
export default {
  name: "JobFilter",
  props: {},
  data() {
    return {
      type: ["推荐", "附近", "最新"],
      cur: "推荐"
    };
  },
  computed: {
    ...mapGetters(["CurCity"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleTypeChange(type) {
      this.cur = type;
    },
    showCity() {
      this.$refs.locationFilter.open();
    },
    showFilter() {
      this.$refs.jobFilterDetail.open();
    },
    selectFilter(filer) {
      console.log(filter);
    },
    showKeyword() {
      this.$refs.keywordFilter.open();
    },
    selectKeyWord(keyw){
      console.log(keyw)
    }
  },
  components: {
    LocationFilter,
    JobFilterDetail,
    KeywordFilter
  }
};
</script>

<style scoped lang="scss">
.filter {
  background: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
