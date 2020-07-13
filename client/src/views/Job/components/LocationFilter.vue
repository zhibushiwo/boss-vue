<template>
  <Search :show="show" @close="show=false">
    <template #button>
      <span>切换城市</span>
    </template>
    <template #title>
      <h4>宁波</h4>
    </template>
    <div class="content">
      <div class="type">
        <ul>
          <li v-for="(item, index) in types" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="location van-hairline--right">
        <ul>
          <li v-for="(item, index) in locations" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="detail">全宁波</div>
    </div>
  </Search>
</template>

<script>
import Search from "@/components/Search";
export default {
  props: {},
  data() {
    return {
      types: ["商圈"],
      locations: [
        {
          name: "宁波",
          id: -1
        },
        {
          name: "鄞州区",
          id: 1
        },
        {
          name: "慈溪市",
          id: 2
        },
        {
          name: "余姚市",
          id: 3
        },
        {
          name: "宁海县",
          id: 4
        },
        {
          name: "江北区",
          id: 5
        },
        {
          name: "北仑区",
          id: 6
        },
        {
          name: "镇海区",
          id: 7
        },
        {
          name: "象山县",
          id: 8
        }
      ],
      selected: [],
      show: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    open() {
      this.show = true;
    }
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  .type {
    flex: 0 0 3;
    background: $grey;
  }
  .location {
    flex: 0 0 4;
  }
  .detail {
    flex: 0 0 4;
  }
}
</style>
