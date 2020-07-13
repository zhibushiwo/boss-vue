<template>
  <Search>
    <template #button>
      <span>切换城市</span>
    </template>
    <template #title>
      <span>宁波</span>
    </template>
    <div></div>
  </Search>
</template>

<script>
import Search from "@/components/Search";
export default {
  props: {},
  data() {
    return {
      type: [],
      location: []
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
</style>
