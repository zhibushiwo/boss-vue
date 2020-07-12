<template>
  <div class="header">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot />
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  background: $theme-color;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: $layout-header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  .left {
    margin-left: 7px;
  }
  .right {
    margin-right: 7px;
  }
  .center {
    flex: 1;
  }
}
</style>
