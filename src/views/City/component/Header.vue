<template>
  <div class="city-header">
    <div class="title">
      <router-link to="/">
        <span class="fa-angle">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
      </router-link>
      <span class="optionCity">城市选择</span>
    </div>
    <div class="seach">
      <input type="text" placeholder="输入城市名或者拼音" v-model="keyword" />
      <div class="search-content" ref="search" v-show="keyword">
        <ul>
          <router-link to="/">
            <li
              class="search-item"
              v-for="item in list"
              :key="item.id"
              @click="handleCityClick(item.name)"
            >{{item.name}}</li>
          </router-link>
          <li class="search-item" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Header",
  props: ["cities"],
  data() {
    return {
      keyword: "",
      list: [],
      timer: null,
      cityName: ""
    };
  },
  methods: {
    handleCityClick(city) {
      this.cityName = city;
      console.log(this.cityName, "aaa");
      this.$emit("addOcity", this.cityName);
      setTimeout(() => {
        this.keyword = "";
      }, 500);
    }
  },
  computed: {
    hasNoData: function() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    });
  }
};
</script>
<style lang="scss" scoped>
.city-header {
  width: 100%;
  position: fixed;
  background-color: $bg-color;
  top: 0;
  left: 0;
  z-index: 101;
}
.title {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #fff;
  .optionCity {
    flex: 1;
    text-align: center;
  }
  .fa-angle {
    font-size: 28px;
    padding-left: 5px;
    color: #fff;
  }
}
.seach {
  text-align: center;
  padding: 5px;
  input {
    width: 100%;
    padding: 5px 0;
    border-radius: 5px;
  }
  .search-content {
    max-height: 500px;
    overflow: hidden;
    li {
      height: 20px;
      line-height: 20px;
      color: #fff;
    }
  }
  .search-item {
    z-index: 100;
  }
}
</style>