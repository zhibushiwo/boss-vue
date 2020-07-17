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
    },
    badge: {
      type: [Number, Boolean]
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
    const badgeType = typeof this.badge;
    const badge = this.badge ? (
      <div class={`badge ${badgeType == "boolean" ? "dot" : ""} `}>
        {badgeType == "number" ? this.badge : ""}
      </div>
    ) : (
      ""
    );
    const Icon = (
      <i
        onClick={this.onClick}
        class={` iconfont ${this.getClass}`}
        style={this.getStyle}
      >
        {badge}
      </i>
    );
    return Icon;
  }
};
</script>
<style lang="scss" scoped>
.iconfont {
  position: relative;
  .badge {
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;
    line-height: 14px;
    text-align: center;
    background-color: #ee0a24;
    border: 1px solid #fff;
    border-radius: 16px;
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
  }
  .dot {
    width: 8px;
    min-width: 0;
    height: 8px;
    background-color: #ee0a24;
    border-radius: 100%;
  }
}
</style>