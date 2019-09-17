<template>
  <div class="options">
    <van-index-bar>
      <div class="cities-zm" v-for="(f,index) in cities" :key="index">
        <van-index-anchor :index="index" class="zm-title">{{index}}</van-index-anchor>
        <div class="zm-city" v-for="c in f" :key="c.id">
          <router-link to="/">
            <div class="txt" @click="optionCity(c.name)">{{c.name}}</div>
          </router-link>
        </div>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: "OptionCity",
  props: ["cities"],

  data() {
    return {
      Ocity: ""
    };
  },
  methods: {
    optionCity(i) {
      console.log(i);
      this.Ocity = i;
      this.$emit("addOcity", this.Ocity);
    }
  }
};
</script>

<style lang="scss" scoped>
.options {
  margin-top: 70px;
  .zm-title {
    background: #ccc;

    padding-left: 5px;
    margin-top: 20px;
  }
  .txt {
    padding: 5px;
    border-bottom: 1px solid travelbalck(0.1);
    height: 30px;
    line-height: 30px;
    color: #333;
  }
}
.column {
  position: fixed;
  top: 250px;
  right: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .col-zm {
    margin-bottom: 5px;
    @media (max-width: 320px) {
      margin-bottom: 0px;
    }
  }
}
</style>