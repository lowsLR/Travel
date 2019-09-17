<template>
  <div class="tarvel-iconList" v-if="iconList.length != 0">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="scrool-msk">
          <div class="scroll-icon" v-for="i in num1" :key="i">
            <img :src="iconList[i-1].imgUrl" alt />
            <span class="txt">{{iconList[i-1].desc}}</span>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="scrool-msk">
          <div class="scroll-icon" v-for="f in num2" :key="f">
            <img :src="iconList[Math.abs(f-14)-(5-2*(f-1))].imgUrl" alt />
            <span class="txt">{{iconList[Math.abs(f-14)-(5-2*(f-1))].desc}}</span>
          </div>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-scrollbar scroll-color" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "IconList",
  props: {
    iconList: {
      type: Array,
      defalut: () => []
    }
  },
  data() {
    return {
      swiperOption: {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false
        }
      },
      num1: 8,
      num2: 6
    };
  }
};
</script>

<style lang="scss" scoped>
.scrool-msk {
  width: 100%;
}

.scroll-icon {
  width: 25%;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px;
  font-size: 14px;

  @media (max-width: 320px) {
    margin: 10px 0 15px;
    font-size: 12px;
  }
  img {
    width: 50px;
    height: 50px;
  }
}
</style>