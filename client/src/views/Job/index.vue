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
        <JobItem v-for="(item, index) in jobItemList" :key="index" v-bind="{...item}" />
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
<script>
import { getJobs } from "@/api";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";
import JobFilter from "./components/JobFilter";
import JobItem from "./components/JobItem";
export default {
  props: {},
  data() {
    return {
      jobList: []
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
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    async getData() {
      try {
        let data = await getJobs();
        console.log(data);
        this.jobList = data.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    LayoutHeader,
    LayoutFooter,
    JobFilter,
    JobItem
  }
};
</script>

<style scoped lang="scss">
.content {
  background: $grey;
  height: 100%;
  padding-top: $layout-header-height;
  .content {
    height: 100%;
    overflow: auto;
  }
}
</style>
