<template>
  <div class="tarvel-recom">
    <div class="recom-title">热销推荐</div>
    <div class="recom-content">
      <div class="recom-box" v-for="(r,index) in recommendList" :key="index">
        <div class="recom-left">
          <img :src="r.imgUrl" alt="景点图片" />
        </div>
        <div class="recom-right">
          <div class="title">{{r.title}}</div>
          <div class="desc">{{r.desc}}</div>
          <router-link to="/details">
            <div class="more">
              查看详情
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendList",
  props: ["recommendList"]
};
</script>

<style lang="scss" scoped>
.tarvel-recom {
  padding: 10px;
  .recom-title {
    height: 44px;
    line-height: 44px;
    font-weight: 700;
  }
  .recom-content {
    img {
      width: 100px;
      height: 100px;
      @media (max-width: 320px) {
        width: 80px;
        height: 80px;
      }
    }
  }
  .recom-box {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    .recom-left {
      flex: 0 0 100px;
      width: 100px;
      margin-right: 15px;
      @media (max-width: 320px) {
        flex: 0 0 80px;
        width: 80px;
        margin-right: 10px;
      }
    }
  }
  .recom-right {
    display: flex;
    flex-direction: column;
    padding: 10px 0 5px;
    > div {
      flex: 1;
    }
    .title {
      font-weight: 700;
      font-size: 18px;
      @media (max-width: 320px) {
        font-size: 14px;
      }
    }
    .desc {
      font-size: 14px;
      color: travelbalck(0.4);
      @media (max-width: 320px) {
        font-size: 10px;
      }
    }
    .more {
      font-size: 16px;
      background: $bg-color;
      height: 25px;
      line-height: 25px;
      width: 80px;
      padding: 3px;
      border-radius: 3px;
      color: #fff;
      @media (max-width: 320px) {
        font-size: 12px;
        width: 60px;
        padding: 2px;
      }
    }
  }
}
</style>