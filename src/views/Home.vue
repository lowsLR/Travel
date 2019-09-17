<template>
  <div class="home">
    <Header :optionCity="optionCity" />
    <Banner :picture="picture" />
    <IconList :iconList="iconList" />
    <RecommendList :recommendList="recommendList" />
    <WeekendList :weekendList="weekendList" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import IconList from "../components/IconList/IconList";
import RecommendList from "../components/RecommendList/RecommendList";
import WeekendList from "../components/WeekendList/WeekendList";
export default {
  name: "home",
  components: {
    Header,
    Banner,
    IconList,
    RecommendList,
    WeekendList
  },
  props: ["picture", "iconList", "recommendList", "weekendList", "optionCity"]
};
</script>

<style lang="scss" scoped>
</style>
