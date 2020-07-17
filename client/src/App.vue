<template>
  <div id="app">
    <keep-alive>
      <router-view class="page" />
    </keep-alive>
    <LayoutFooter />
  </div>
</template>
<script>
import LayoutFooter from "@/components/LayoutFooter";
export default {
  components: {
    LayoutFooter
  }
};
</script>
<style lang="scss">
#app,
.page {
  height: 100%;
}
</style>
