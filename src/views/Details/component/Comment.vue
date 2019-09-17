<template>
  <div class="comment-layout">
    <div class="comment-title border-bottom">
      <p>
        <i class="fa fa-user" aria-hidden="true"></i> 用户评论
      </p>
    </div>
    <div class="comment-item border-bottom">
      <div class="comment-item-title">
        <div class="item-box">
          <div class="star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="name">随*啊 2017-12-30</div>
        </div>
        <p>参观故宫是来京必须要安排的行程，紫禁城的宏伟和惊艳超乎你想象，假装自己穿越时空，你走在乾隆皇帝走过的石板砖上，体验当年盛世的文化底蕴和奢华的生活～ 攻略1 提前网上购买门票，凭身份证直接进 攻略2 租讲解器，每个讲解器都是感应的，每个只讲解一遍，只有一个耳机，别想着两人共用的好事儿，哈哈哈 攻略3 周一闭馆，周末人居多，尽量安排工作日，若所有宫殿都想参观，就提早进去，不过我个人觉得没必要，参观代表性的中轴和个别妃子和慈禧的宫殿即可，建议预留至少大半天时间在里头 再来北京，还愿意去故宫~~</p>
      </div>
    </div>
    <div class="comment-item border-bottom">
      <div class="comment-item-title">
        <div class="item-box">
          <div class="star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="name">g*8 2018-03-24</div>
        </div>
        <p>不错，很方便，集合时需要打出1个小时的富裕时间，因为从天安门地铁出来安检的太严了，赶上人多的话可能需要1个小时，今天是淡季也排了40分钟才进入天安门区域，张敏导游很专业讲解的也很认真，很愉快的一次故宫之旅。</p>
        <div class="gallary" @click="imgShow">
          <div class="gallary-img" v-for="(item,index) in imgList" :key="index">
            <img :src="item" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="more">
      查看更多评论
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
    </div>
    <div class="space"></div>
    <div class="overlay" v-show="showGallary" @click.self="imgClose">
      <div class="msk">
        <swiper>
          <swiper-slide v-for="(item,index) in imgList" :key="index" class="msk-box">
            <img :src="item" alt />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  data() {
    return {
      showGallary: false,
      imgList: [
        "https://imgs.qunarzz.com/piao/fusion/1803/eb/3cecdcc35430f602.jpg_228x168_0dfeb38e.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/93/e260dd039cb04c02.jpg_228x168_a5195ec3.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/79/eaa288e638c8ff02.jpg_228x168_ee6d3117.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/3d/15cd669297228402.jpg_228x168_fadb7e6e.jpg"
      ],
      imgGallary: [
        "https://imgs.qunarzz.com/piao/fusion/1803/eb/3cecdcc35430f602.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/93/e260dd039cb04c02.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/79/eaa288e638c8ff02.jpg",
        "https://imgs.qunarzz.com/piao/fusion/1803/3d/15cd669297228402.jpg"
      ]
    };
  },
  components: {},
  methods: {
    imgShow() {
      this.showGallary = true;
    },
    imgClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-layout {
  .comment-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0px 10px;
    .fa-user {
      color: $bg-color;
    }
  }
  .border-bottom {
    margin-bottom: 10px;
  }
  .comment-item {
    padding: 5px 10px;
    p {
      text-indent: 2em;
    }
  }
  .item-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    .star {
      color: orange;
    }
  }
  .gallary {
    border-bottom: 1px dashed travelbalck(0.3);
    width: 100%;
    padding-bottom: 20px;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    .gallary-img {
      img {
        width: 50%;
        float: left;
        box-sizing: border-box;
        padding: 5px 2.5px 0 2.5px;
      }
    }
  }
  .more {
    height: 20px;
    line-height: 10px;
    text-align: center;
    padding-bottom: 10px;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #333;
    z-index: 100;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .msk {
      width: 100%;
      background: #fff;
      .msk-box {
        > img {
          width: 100%;
        }
      }
    }
  }
}
</style>
