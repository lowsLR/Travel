<template>
  <div class="travel-sidebar">
    <div class="blur-box" @click.self="close">
      <div class="info-content">
        <div class="info-header">
          <div class="header-userInfo" v-for="(i,index) in user" :key="index">
            <div class="header-img">
              <img :src="i.imgUrl" alt="头像" />
            </div>
            <div class="header-name">用户：{{i.name}}</div>
            <div class="header-signature">
              <span class="integration">我的成长值:{{i.integration}}</span> |
              <span class="GrowthValu">我的积分:{{i.GrowthValu}}</span>
            </div>
            <div class="header-member">
              我的会员:
              <em>{{i.member}}</em>
            </div>
          </div>
        </div>
        <div class="info-icon">
          <div class="iconList" v-for="(l,index) in iconList" :key="index">
            <div class="ico-contaier">
              <div class="sweep">
                <i class="fa fa-qrcode" aria-hidden="true"></i>
                {{l.sweep}}
              </div>
              <div class="collect">
                <i class="fa fa-heart" aria-hidden="true"></i>
                {{l.collect}}
              </div>
              <div class="order">
                <i class="fa fa-file-text" aria-hidden="true"></i>
                {{l.order}}
              </div>
              <div class="notice">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                {{l.notice}}
              </div>
            </div>
            <div class="flooter">
              <div class="install">
                <i class="fa fa-cog" aria-hidden="true"></i>
                {{l.install}}
              </div>
              <div class="quit">
                <i class="fa fa-power-off" aria-hidden="true"></i>
                {{l.quit}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      user: [],
      iconList: []
    };
  },
  mounted() {
    this.getSidebarData();
  },
  methods: {
    async getSidebarData() {
      try {
        let res = await this.$http("/sidebar/info");
        res = res.data;
        this.user = res.info.user;
        this.iconList = res.info.iconList;
        this.$nextTick(() => {
          console.log(this.user, "saoqiang");
          console.log(this.iconList, "saoqiang");
        });
      } catch (err) {
        console.log(err);
      }
    },
    close() {
      this.$emit("addClose", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.travel-sidebar {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  left: 0%;
  top: 0;
  .blur-box {
    width: 100%;
    height: 100%;
    background-color: travelbalck(0.1);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
  .info-content {
    width: 60%;
    height: 100%;
    background-color: #fff;
    @media (max-width: 320px) {
      width: 55%;
    }

    .info-header {
      height: 25%;
      background-color: $bg-color;
    }
  }
  .header-userInfo {
    padding: 10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    .header-img {
      width: 61px;
      height: 61px;
      border: 1px solid #fff;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 5px;
      > img {
        width: 60px;
        height: 60px;
      }
    }
    .header-signature {
      word-break: keep-all;
      white-space: nowrap;
      margin: 10px 0;
      @media (max-width: 320px) {
        font-size: 11px;
        margin: 5px 0;
      }
    }
    .header-member {
      > em {
        color: rgba(238, 6, 6, 0.7);
        font-style: italic;
      }
    }
  }
  .info-icon {
    height: 75%;
    .iconList {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      position: relative;
    }
  }
  .ico-contaier {
    > div {
      margin: 30px 0;
    }
  }
  .flooter {
    width: 100%;
    position: absolute;
    bottom: 10px;
    height: 30px;
    line-height: 30px;
    background-color: $bg-color;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #fff;
  }
}
</style>