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
    <LayoutFooter />
  </div>
</template>

<script>
import { getJobs } from "@/api";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  props: {},
  data() {
    return {
      data: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async getData() {
      try {
        let data = await getJobs();
        console.log(data);
      } catch (error) {}
    }
  },
  components: {
    LayoutHeader,
    LayoutFooter
  }
};
</script>

<style scoped lang="scss">
.layHeader {
}
</style>
