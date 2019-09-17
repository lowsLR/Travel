<template>
  <div class="tarvel-scenery">
    <div class="header-img">
      <router-link to="/">
        <div class="black">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
      </router-link>
      <div class="img">
        <img :src="sceneryData.bannerImg" alt="展示图" />
      </div>
      <div class="txt">{{sceneryData.sightName}}</div>
      <div class="r-bottom" @click="showImg">
        <i class="fa fa-file-image-o" aria-hidden="true"></i>
        {{num}}
      </div>
      <div class="swiper-overlay" v-show="show" @click.self="closeImg">
        <div class="msk">
          <swiper>
            <swiper-slide v-for="img in sceneryImg" :key="img.id" class="msk-box">
              <img :src="img.imgUrl" alt />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="warp">
      <div class="assess-top border-bottom">
        <div class="assess-top-score border-right">
          <p class="zt">
            <span>5.0</span> 分 超赞
          </p>
          <p>223410条评论 86攻略</p>
        </div>
        <div class="assess-top-intro">
          <p>景点简介</p>
          <p>开放时间、贴士</p>
        </div>
      </div>
      <router-link to="/mapId">
        <div class="assess-bottom">
          <span class="iconfont">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
          </span> 北京市东城区景山前街4号
          <span class="iconfont icon-right">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
        </div>
      </router-link>
      <div class="notice">
        <p>
          <span class="iconfont">
            <i class="fa fa-bullhorn" aria-hidden="true"></i>
          </span> 除法定节假日，故宫博物院实行周一闭馆。
        </p>
      </div>
      <div class="ticket">
        <p>
          <span class="iconfont icon-praise">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
          </span> 门票推荐
        </p>
      </div>
    </div>
    <div class="list">
      <div class="category" v-for="(i,index) in categoryList" :key="index">
        <div class="bTitle">
          <span class="ticket-box">
            <i class="fa fa-ticket" aria-hidden="true"></i>
          </span>
          {{i.title}}
        </div>
        <div class="children" v-for="(f,count) in i.children" :key="count">
          <div class="sTitle">
            <span class="ticket-box">
              <i class="fa fa-ticket" aria-hidden="true"></i>
            </span>
            {{f.title}}
          </div>
          <div class="enTicket">{{f.entranceTicket}}￥</div>
        </div>
      </div>
    </div>
    <div class="gray"></div>
    <Comment />
  </div>
</template>

<script>
import Comment from "./component/Comment";
export default {
  name: "Details",
  data() {
    return {
      sceneryData: {},
      sceneryImg: [],
      num: 0,
      categoryList: [],
      show: false
    };
  },
  components: {
    Comment
  },
  mounted() {
    this.getSceneryData();
  },
  methods: {
    async getSceneryData() {
      try {
        let res = await this.$http("/api/scenery");
        res = res.data;
        this.sceneryData = res.data;
        this.sceneryImg = res.data.weekendList;
        this.num = res.data.weekendList.length;
        this.categoryList = res.data.categoryList;
        this.$nextTick(() => {
          console.log(res.data.weekendList[1].imgUrl, "aaa");
          //  console.log(res.data.bannerImg);
        });
      } catch (err) {
        console.log(err);
      }
    },
    showImg() {
      this.show = true;
    },
    closeImg() {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.tarvel-scenery {
  width: 100%;
  .header-img {
    position: relative;
    height: 200px;
    .black {
      position: absolute;
      left: 5px;
      top: 5px;
      color: #fff;
      z-index: 1;
      .fa-angle-left {
        font-size: 38px;
      }
    }
    img {
      width: 100%;
      height: 200px;
      position: absolute;
      z-index: -1;
    }
    .r-bottom {
      text-align: center;
      position: absolute;
      padding: 1px 0;
      width: 50px;
      bottom: 5px;
      right: 10px;
      z-index: 1;
      background: #000;
      color: rgba(255, 255, 255, 0.72);
      border-radius: 10px;
    }
    .txt {
      position: absolute;
      color: #fff;
      font-size: 18px;
      bottom: 5px;
      left: 5px;
    }
  }
  .warp {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid travelbalck(0.2);
    .assess-top {
      display: flex;
      flex-direction: row;
      p {
        margin-bottom: 5px;
        height: 20px;
      }
    }
    .assess-top-score {
      flex: 1;
      p.zt {
        color: $zt-color;
        > span {
          font-size: 25px;
        }
      }
    }
    .assess-top-intro {
      flex: 1;
    }
    .assess-bottom {
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: relative;
      color: travelbalck(0.6);
      .iconfont {
        text-align: center;
        > .fa-map-marker {
          font-size: 18px;
          margin-right: 3px;
          color: #333;
        }
      }
      .icon-right {
        position: absolute;
        right: 25px;
        > .fa-angle-right {
          font-size: 30px;
          color: #333;
        }
      }
    }
    .notice {
      color: $zt-color;
      height: 40px;
      line-height: 40px;
    }
    .ticket {
      font-weight: 600;
      font-size: 18px;
      height: 40px;
      line-height: 40px;
      .fa-thumbs-up {
        color: red;
      }
    }
  }
  .list {
    padding: 10px;
    .bTitle {
      font-size: 18px;
      font-size: 800;
      height: 30px;
      display: flex;
      flex-direction: row;
      vertical-align: middle;
      .ticket-box {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: $bg-color;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
      }
    }
    .children {
      height: 30px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      border-bottom: 1px solid travelbalck(0.1);
      .sTitle {
        flex: 1;
        margin-left: 20px;
        display: flex;
        .ticket-box {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: $bg-color;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 5px;
        }
      }
      .enTicket {
        color: $zt-color;
      }
    }
  }
  .gray {
    width: 100%;
    height: 20px;
    background: travelbalck(0.1);
  }
  .swiper-overlay {
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
        img {
          width: 100%;
          position: relative;
        }
      }
    }
  }
}
</style>