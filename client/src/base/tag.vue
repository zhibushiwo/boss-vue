<script>
export default {
  name: "tag",
  render(h) {
    return h(
      "span",
      {
        class: ["tag"],
        on: {
          click: () => {
            this.$emit("click");
          }
        }
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped lang="scss">
.tag {
  background: $grey;
  color: #848484;
  padding: 6px 10px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 8px;
}
</style>
