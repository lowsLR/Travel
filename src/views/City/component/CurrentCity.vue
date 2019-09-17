<template>
  <div class="current-city">
    <div class="current-title">当前城市</div>
    <div class="current-option">
      <div class="nowCity">{{myCity}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrentCity",
  props: {
    Ocity: {
      type: String,
      default: "广州"
    }
  },
  computed: {
    myCity() {
      if (this.Ocity) {
        return this.Ocity;
      } else {
        return "广州";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.current-city {
  margin-top: 85px;
  .current-option {
    padding-left: 5px;
    margin-top: 5px;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .current-title {
    background: #ccc;
    height: 20px;
    line-height: 20px;
    padding-left: 5px;
  }
  .nowCity {
    width: 100px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 3px;
    text-align: center;
    line-height: 25px;
  }
}
</style>