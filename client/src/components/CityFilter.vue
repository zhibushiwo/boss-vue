<template>
  <Search :show="show" @close="show=false" :showFoot="false">
    <template #title>
      <h4>选择城市</h4>
    </template>
    <div class="content">
      <div class="locationCity" v-if="locationCity">
        <h4 class="title">定位城市</h4>
        <base-tag class="tag" @click="handleSelect(locationCity)">{{locationCity.name}}</base-tag>
      </div>
      <div class="hotCities">
        <h4 class="title">热门城市</h4>
        <base-tag
          class="tag"
          @click="handleSelect(item)"
          v-for="(item, index) in hotCityList"
          :key="index"
        >{{item.name}}</base-tag>
      </div>
      <van-index-bar>
        <template v-for="(item, index) in cityList">
          <van-index-anchor :index="item[0]" :key="index" />
          <template v-for="(city) in item[1]">
            <base-tag class="tag" @click="handleSelect(city)" :key="city.code">{{city.name}}</base-tag>
          </template>
        </template>
      </van-index-bar>
    </div>
  </Search>
</template>

<script>
import { getCities } from "@/api";
import Search from "@/components/Search";
import { mapMutations } from "vuex";
export default {
  name: "CityFilter",
  props: {},
  data() {
    return {
      show: false,
      locationCity: null,
      hotCityList: [],
      cityList: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  watch: {},
  methods: {
    open() {
      this.show = true;
    },
    async getData() {
      let res = await getCities();
      let { locationCity, hotCityList, cityList } = res.data;
      this.locationCity = locationCity;
      this.hotCityList = hotCityList;
      let totalCity = Object.create(null);
      cityList.map(({ subLevelModelList }) => {
        subLevelModelList.map(item => {
          if (item.firstChar) {
            let letter = item.firstChar.toUpperCase();
            if (!totalCity[letter]) {
              totalCity[letter] = new Array();
            }
            totalCity[letter].push(item);
          }
        });
      });
      this.cityList = Object.freeze(Object.entries(totalCity).sort());
    },
    handleSelect(val) {
      this.SetCurCity(val);
      this.$emit("select");
      this.show = false;
    },
    ...mapMutations(["SetCurCity"])
  },
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
.content {
  padding: 7px;
  .tag {
    width: 22vw;
    margin-bottom: 10px;
    text-align: center;
  }
  .title {
    font-size: 16px;
    margin: 8px;
  }
}
</style>
