<template>
  <Search :show="show" @close="show=false" @clear="clearAll" @confirm="confirm">
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
            <div class="header">
              <h4>{{item.type}}</h4>
              <div>
                <span class="count" v-show="item.select.length>0">{{item.select.length}}</span>
                <span v-if="item.words.length>9">
                  <base-icon
                    class="icon"
                    type="down"
                    size="14"
                    v-if="!item.showAll"
                    @click="toggleShow(index)"
                  ></base-icon>
                  <base-icon class="icon" type="up" size="14" @click="toggleShow(index)" v-else></base-icon>
                </span>
              </div>
            </div>
            <div class="tagWrap">
              <base-tag
                class="tags"
                :class="{active:item.select.includes(val)  }"
                @click="handleSelect(index,val)"
                v-for="(val, idx) in renderShow(item.words,item.showAll)"
                :key="idx"
              >{{val}}</base-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="footer" v-show="keywordLength>0">
        已选
        <base-vline />
        <div class="selWrap">
          <span class="selected" v-for="(item, index) in selectKeyWords" :key="index">{{item}}</span>
        </div>
      </div>
    </div>
  </Search>
</template>

<script>
import Search from "@/components/Search";
const MAX_KEYWORDS_NUM = 5;
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
          select: [],
          showAll: false
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
          select: [],
          showAll: false
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
          select: [],
          showAll: false
        },
        {
          type: "前端标准/规范",
          words: ["CSS3", "HTML5", "JSON", "HTTP1.1", "XML"],
          select: [],
          showAll: false
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
          select: [],
          showAll: false
        }
      ]
    };
  },
  computed: {
    keywordLength() {
      return this.keywords.reduce((acc, cur) => acc + cur.select.length, 0);
    },
    selectKeyWords() {
      return this.keywords.reduce((acc, cur) => acc.concat(...cur.select), []);
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
    toggleShow(idx) {
      this.keywords[idx].showAll = !this.keywords[idx].showAll;
    },
    renderShow(list, showAll) {
      if (!showAll) {
        return list.slice(0, 9);
      }
      return list;
    },
    clearAll() {
      this.keywords.map(item => {
        item.select = [];
      });
    },
    confirm() {
      this.show = false;
      this.$emit("select", this.selectKeyWords);
    },
    handleSelect(typeIndex, val) {
      let cur = Object.assign({}, this.keywords[typeIndex]);
      let idx = cur.select.findIndex(item => item == val);
      if (idx > -1) {
        cur.select.splice(idx, 1);
      } else {
        if (this.keywordLength == MAX_KEYWORDS_NUM) {
          this.$toast({
            message: "5个人头5份赏金",
            position: "bottom"
          });
          return false;
        }
        if (cur.single) {
          cur.select.splice(0, 1, val);
        } else {
          cur.select.unshift(val);
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
  padding: 8px 12px;
  height: calc(100% - 16px);
  .tip {
    color: #333;
    margin-bottom: 5px;
  }
  .keywordWrap {
    flex: 1;
    overflow: auto;
    > div {
      height: 100%;
      overflow: auto;
    }
  }
  .header {
    margin: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4 {
      font-size: 16px;
    }
    .count {
      border-radius: 50%;
      width: 18px;
      height: 18px;
      text-align: center;
      display: inline-block;
      background: $theme-color;
      color: #fff;
      margin-right: 5px;
    }
    .icon {
      color: #b8b8b8;
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
  .footer {
    height: 40px;
    display: flex;
    align-items: center;
    .selWrap {
      flex: 1;
      overflow-x: auto;
      line-height: 38px;
    }
    .selected {
      background: rgba($theme-color, 0.1);
      color: $theme-color;
      border-radius: 100px;
      font-size: 13px;
      padding: 8px 16px;
      margin-left: 8px;
    }
  }
}
</style>
