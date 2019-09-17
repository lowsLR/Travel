<template>
  <div class="travel-weekend">
    <div class="weekend-title">
      <h1>周末去哪玩</h1>
    </div>
    <router-link to="/scenery">
      <div class="weekend-content">
        <div class="weekend-box" v-for="(w,index) in weekendList" :key="index">
          <div class="weekend-img">
            <img :src="w.imgUrl" alt="景点图片" />
          </div>
          <div class="title">{{w.title}}</div>
          <div class="desc">{{w.desc}}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "WeekendList",
  props: ["weekendList"]
};
</script>

<style lang="scss" scoped>
.travel-weekend {
  padding: 10px;
  .weekend-title {
    > h1 {
      font-weight: 700;
      height: 44px;
      line-height: 44px;
    }
  }
  .weekend-box {
    .weekend-img {
      img {
        width: 100%;
      }
    }
    .title {
      font-size: 16px;
      font-weight: 600;
      margin: 10px 0;
      @media (max-width: 320px) {
        font-size: 14px;
      }
    }
    .desc {
      font-size: 14px;
      color: travelbalck(0.4);
      margin: 0 0 10px;
      @media (max-width: 320px) {
        font-size: 12px;
      }
    }
  }
}
</style>