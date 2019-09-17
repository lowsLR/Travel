import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
// import FastClick from "fastclick";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import VueAMap from "vue-amap";
import { Button } from "vant";
import { IndexBar, IndexAnchor } from "vant";

Vue.use(VueAxios, axios); //注册
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
// FastClick.attach(document.body);
Vue.use(Button);
Vue.use(IndexBar).use(IndexAnchor);

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "your amap key",
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: "1.4.4"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
