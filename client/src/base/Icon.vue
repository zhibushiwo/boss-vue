<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 20
    }
  },
  computed: {
    getClass() {
      return `icon-${this.type}`;
    },
    getStyle() {
      return {
        fontSize: `${this.size}px`
      };
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  },
  render() {
    const Icon = (
      <i
        onClick={this.onClick}
        class={` iconfont ${this.getClass}`}
        style={this.getStyle}
      ></i>
    );
    return Icon;
  }
};
</script>