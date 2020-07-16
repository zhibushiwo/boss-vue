<template>
  <Search :show="show" @close="show=false" @clear="clear" @confirm="confirm">
    <template #button>
      <span @click="$refs.cityfilter.open()">切换城市</span>
    </template>
    <template #title>
      <h4>{{CurCity}}</h4>
    </template>
    <div class="content">
      <div class="type">
        <ul>
          <li
            v-for="(item, index) in types"
            :key="index"
            :class="{select:item.id==selected[0]}"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="location van-hairline--right">
        <ul>
          <li
            v-for="(item, index) in locations"
            :key="index"
            :class="{select:item.id==selected[1]}"
            @click="selected.splice(1,1,item.id)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="detail">
        <ul>
          <li class="select">全宁波</li>
        </ul>
      </div>
    </div>
    <CityFilter ref="cityfilter" @select="show=false" />
  </Search>
</template>

<script>
import Search from "@/components/Search";
import CityFilter from "@/components/CityFilter";
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {
      types: [
        {
          name: "商圈",
          id: 1
        }
      ],
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
  computed: {
    ...mapGetters(["CurCity"])
  },
  created() {},
  mounted() {
    this.selected = [this.types[0].id, this.locations[0].id, []];
  },
  watch: {},
  methods: {
    open() {
      this.show = true;
    },
    clear() {},
    confirm() {
      this.show = false;
    }
  },
  components: {
    Search,
    CityFilter
  }
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  height: 100%;
  ul {
    padding: 0 9px;
    li {
      margin: 12px 0 24px;
      &.select {
        color: $theme-color;
      }
    }
  }
  .type {
    flex: 3;
    background: $grey;
  }
  .location {
    flex: 4;
  }
  .detail {
    flex: 4;
  }
}
</style>
