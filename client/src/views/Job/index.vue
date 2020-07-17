<template>
  <div>
    <LayoutHeader class="layHeader">
      <template #left>web前端</template>
      <template #right>
        <base-icon type="plus" size="28"></base-icon>
        <base-vline />
        <base-icon type="search" size="28"></base-icon>
      </template>
    </LayoutHeader>
    <div class="content">
      <JobFilter />
      <div class="list">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="别滑了，已经没啦" @load="onLoad">
            <JobItem v-for="(item, index) in jobItemList" :key="index" v-bind="{...item}" />
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>
<script>
import { getJobs } from "@/api";
import LayoutHeader from "@/components/LayoutHeader";

import JobFilter from "./components/JobFilter";
import JobItem from "./components/JobItem";
export default {
  props: {},
  data() {
    return {
      jobList: [],
      loading: false,
      finished: false,
      isLoading: false,
      page: 0
    };
  },
  computed: {
    jobItemList() {
      return this.jobList.map(item => ({
        name: item["job-name"],
        conpanyInfo: [item["company-name"], ...item["company-info"]],
        money: item.money,
        tags: [...item.limit, ...item.tags],
        location: "宁波",
        publis: { name: item["info-publis"][0], job: item["info-publis"][1] }
      }));
    }
  },
  created() {},
  async mounted() {
    //this.jobList = await this.getData();
  },
  watch: {},
  methods: {
    async getData() {
      try {
        let data = await getJobs({
          page: this.page
        });
        return data.data;
      } catch (error) {}
    },
    async onLoad() {
      let data = await this.getData();
      if (data.length == 0) {
        this.finished = true;
      }
      this.jobList.push(...data);
      this.page++;
      this.loading = false;
    },
    async onRefresh() {
      this.page = 0;
      let data = await this.getData();
      this.jobList = data;
      this.isLoading = false;
    }
  },
  components: {
    LayoutHeader,

    JobFilter,
    JobItem
  }
};
</script>

<style scoped lang="scss">
.content {
  background: $grey;
  padding-top: $layout-header-height;
  display: flex;
  flex-direction: column;
  height: calc(100% - 50px - #{$layout-header-height});
  .list {
    flex: 1;
    overflow: auto;
  }
}
</style>
