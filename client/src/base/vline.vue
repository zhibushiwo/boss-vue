<script>
export default {
  name: "vline",
  render(h) {
    return <span class="vline"></span>;
  }
};
</script>

<style scoped lang="scss">
.vline {
  display: inline-block;
  width: 1px;
  height: 12px;
  vertical-align: middle;
  background: #e0e0e0;
  margin: 0 10px;
}
</style>
