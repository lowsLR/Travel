<template>
  <div class="travel-banner">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="pic in picture " :key="pic.id">
        <img class="swiper-img" :src="pic.imgUrl" :key="pic.id" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  components: {
    // swiper,
    // swiperSlide
  },
  props: {
    picture: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: {
    showSwiper() {
      return this.picture.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.travel-banner {
  width: 100%;
  margin-top: 44px;
  overflow: hidden;
  height: 0;
  padding-bottom: 27%;

  .swiper-img {
    width: 100%;
  }
}
</style>