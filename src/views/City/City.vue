<template>
  <div class="tarvel-city">
    <Header :cities="cities" @addOcity="addOcity" />
    <CurrentCity :Ocity="Ocity" />
    <HotCity :hotCities="hotCities" :letter="letter" @addOcity="addOcity" />
    <OptionCity :cities="cities" @addOcity="addOcity" />
  </div>
</template> 

<script>
import Header from "./component/Header";
import CurrentCity from "./component/CurrentCity";
import HotCity from "./component/HotCity";
import OptionCity from "./component/OptionCity";
export default {
  name: "City",
  components: {
    Header,
    CurrentCity,
    HotCity,
    OptionCity
  },
  data() {
    return {
      hotCities: [],
      cities: {},
      letter: "",
      Ocity: ""
    };
  },
  mounted() {
    this.getCityData();
  },
  methods: {
    async getCityData() {
      try {
        let res = await this.$http("/api/city");
        res = res.data;
        this.hotCities = res.data.hotCities;
        this.cities = res.data.cities;
        this.$nextTick(() => {
          // console.log(this.hotCities, "hotCities");
          console.log(this.cities, "aaa");
          console.log(this.cities.A[0].id, "bbb");
        });
      } catch (err) {
        console.log(err);
      }
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
    addOcity(i) {
      this.Ocity = i;
      this.$emit("addOcity", this.Ocity);
    }
  }
};
</script>


<style lang="scss" scoped>
.tarvel-city {
  width: 100%;
}
</style>