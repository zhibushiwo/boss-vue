<template>
  <Search :show="show" @close="show=false" @clear="clearAll" @confrim="confirm">
    <template #title>
      <h4>
        关键词
        <span v-if="keywordLength>0">
          ·
          <span class="count">{{keywordLength}}</span>
        </span>
      </h4>
    </template>
    <div class="content">
      <p class="tip">选择求职喜好。更加精准推送广告。</p>
      <div class="keywordWrap">
        <div>
          <van-search v-model="search" placeholder="搜索关键词" />
          <div v-for="(item, index) in keywords" :key="index">
            <h4 class="title">{{item.type}}</h4>
            <div class="tagWrap">
              <base-tag
                class="tags"
                :class="{active:item.select.includes(val)  }"
                @click="handleSelect(index,val)"
                v-for="(val, idx) in item.words"
                :key="idx"
              >{{val}}</base-tag>
            </div>
          </div>
        </div>
      </div>

      <div class="selected">已选 | xxx</div>
    </div>
  </Search>
</template>

<script>
import Search from "@/components/Search";
export default {
  props: {},
  data() {
    return {
      show: false,
      search: "",
      keywords: [
        {
          type: "web前端框架",
          words: [
            "jQuery",
            "Vue",
            "React",
            "Angular",
            "BootStrap",
            "Dojo",
            "FineUI",
            "Node.js",
            "Ex.js",
            "YUI",
            "Polymer"
          ],
          select: []
        },
        {
          type: "开发语言",
          words: [
            "JavaScript",
            "C#",
            ".Net",
            "Python",
            "Java",
            "PHP",
            "SQL",
            "VB",
            "Go",
            "TypeScript",
            "A",
            "B",
            "C",
            "D",
            "A111",
            "B222",
            "C333",
            "D444"
          ],
          select: []
        },
        {
          type: "前端项目",
          words: [
            "电商",
            "小程序",
            "可视化",
            "手机游戏",
            "网页游戏",
            "特效制作"
          ],
          select: []
        },
        {
          type: "前端标准/规范",
          words: ["CSS3", "HTML5", "JSON", "HTTP1.1", "XML"],
          select: []
        },
        {
          type: "推荐关键词",
          words: [
            "React",
            "全栈开发",
            "移动端",
            "移动端Web",
            "JS库",
            "Vuex",
            "JavaScript",
            "ECharts",
            "Webpack",
            "Sass",
            "VUE框架",
            "前端实现",
            "学信网",
            "PC端",
            "HTML",
            "CSS3",
            "js模块化",
            "语义化",
            "实现业务逻辑",
            "CSS",
            "浏览器兼容",
            "精通javascript",
            "前端开发工程师",
            "后端语言",
            "页面架构",
            "前端性能",
            "熟悉css",
            "web开发技术",
            "AJAX",
            "物联网",
            "精通html",
            "前端程序员",
            "手机app开发",
            "jQuery",
            "app开发",
            "Gulp",
            "前端开发框架",
            "W3C标准",
            "TypeScript",
            "Redux"
          ],
          select: []
        }
      ]
    };
  },
  computed: {
    keywordLength() {
      return this.keywords.reduce((acc, cur) => acc + cur.select.length, 0);
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    open() {
      this.show = true;
    },
    clearFilter(idx) {
      this.keywords[idx].select = [];
    },
    clearAll() {
      this.keywords.map(item => {
        item.select = [];
      });
    },
    confirm() {
      let filter = this.keywords
        .map(({ type, select }) => ({
          type,
          select
        }))
        .filter(({ select }) => select.length > 0);
      this.$emit("select", filter);
    },
    handleSelect(typeIndex, val) {
      let cur = Object.assign({}, this.keywords[typeIndex]);
      let idx = cur.select.findIndex(item => item == val);
      if (idx > -1) {
        cur.select.splice(idx, 1);
      } else {
        if (cur.single) {
          cur.select.splice(0, 1, val);
        } else {
          cur.select.push(val);
        }
      }
      this.keywords.splice(typeIndex, 1, cur);
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.count {
  color: $theme-color;
}
.content {
  display: flex;
  flex-direction: column;
  padding: 8px;
  .keywordWrap {
    flex: 1;
    > div {
      height: 100%;
      overflow: auto;
    }
  }
  .title {
    font-size: 16px;
    margin: 8px;
    .tip {
      font-weight: 100;
      margin-left: 5px;
      font-size: 10px;
    }
  }
  .tagWrap {
    display: flex;
    flex-wrap: wrap;
    .tags {
      width: 23vw;
      margin-left: 0;
      margin-bottom: 10px;
      text-align: center;
      padding: 10px;
      border: 1px solid #fff;
      margin-right: 10px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &.active {
        border: 1px solid $theme-color;
        color: $theme-color;
        background: rgba($theme-color, 0.1);
      }
    }
  }
}
</style>
