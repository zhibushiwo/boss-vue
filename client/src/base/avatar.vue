<template functional>
  <van-image :class="data.staticClass" v-bind="data.attrs" v-on="listeners" round :src="props.img" />
</template>

<script>
export default {
  name: "avatar"
};
</script>

<style scoped lang="scss">
</style>
