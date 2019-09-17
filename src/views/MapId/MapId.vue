<template>
  <div id="app">
    <router-link to="/details">
      <div class="fa-chevro">
        <i class="fa fa-angle-left" aria-hidden="true"></i>
      </div>
    </router-link>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.fa-chevro {
  position: absolute;
  z-index: 100;
  left: 5px;
  top: 5px;
  .fa-angle-left {
    font-size: 38px;
  }
}
.amap-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>