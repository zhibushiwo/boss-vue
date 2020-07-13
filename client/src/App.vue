<template>
  <div id="app">
    <keep-alive>
        <router-view class="page" />
    </keep-alive>
  </div>
</template>
<style lang="scss">
#app,
.page {
  height: 100%;
}
</style>
