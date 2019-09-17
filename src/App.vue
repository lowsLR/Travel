<template>
  <div id="app">
    <keep-alive>
      <router-view
        :picture="picture"
        :iconList="iconList"
        :recommendList="recommendList"
        :weekendList="weekendList"
        :optionCity="optionCity"
        @addOcity="addOcity"
      />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      picture: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      optionCity: ""
    };
  },
  mounted() {
    this.getpPctureDate();
  },
  methods: {
    async getpPctureDate() {
      try {
        let res = await this.$http("/api/data");
        res = res.data;
        this.picture = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;
        this.$nextTick(() => {
          // console.log(this.picture, "aaa");
        });
      } catch (err) {
        console.log(err);
      }
    },
    addOcity(i) {
      this.optionCity = i;
    }
  }
};
</script>
<style>
</style>
