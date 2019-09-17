<template>
  <div class="city-hotCities">
    <div class="current-title">热门城市</div>
    <div class="hotCities" ref="warpper">
      <div class="hotCity" v-for="i in hotCities" :key="i.id">
        <router-link to="/">
          <div class="nowCity" @click="myCity(i.name)">{{i.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import Bscroll from "better-scroll";
export default {
  name: "HotCity",
  props: ["hotCities", "letter"],
  methods: {
    myCity(i) {
      console.log("hotcity", i);
      let city = i;
      this.$emit("addOcity", city);
    }
  }
};
</script>

<style lang="scss" scoped>
.hotCities {
  padding: 10px 5px;
  .hotCity {
    width: 33.333%;
    height: 25px;
    border-radius: 3px;
    text-align: center;
    line-height: 25px;
    float: left;
    margin-bottom: 10px;
    text-align: center;
  }
}
.current-title {
  background: #ccc;
  height: 20px;
  line-height: 20px;
  padding-left: 5px;
}
.nowCity {
  width: 100px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  line-height: 25px;
  color: #333;
}
</style>