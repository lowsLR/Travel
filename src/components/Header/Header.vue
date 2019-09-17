 <template>
  <div class="travel-header">
    <transition name="move">
      <Sidebar v-show="show" @addClose="addClose" />
    </transition>
    <div class="travel-search">
      <div class="retreat">
        <i class="fa fa-bars" aria-hidden="true" @click="blurShow"></i>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入内容" />
      </div>
      <router-link to="/city">
        <div class="optionCity">
          {{OptCity}}
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>
 
 <script>
import Sidebar from "./Sidebar/Sidebar";
export default {
  name: "Header",
  props: ["optionCity"],
  components: {
    Sidebar
  },
  data() {
    return {
      show: false,
      id: 0,
      cruuterCity: ""
    };
  },
  computed: {
    OptCity() {
      if (this.optionCity) {
        return this.optionCity;
      } else {
        return this.cruuterCity;
      }
    }
  },
  methods: {
    blurShow() {
      this.show = true;
    },
    addClose(f) {
      this.show = f;
    },
    async geCruuterCity() {
      this.$http("/apil/cityjson?ie=uft-8", {}).then(res => {
        res = res.data;
        // var resstr = JSON.stringify(res);
        console.log(res);
        // console.log(res.substring(75, 78));
        this.cruuterCity = res.substring(75, 77);
      });
    }
  },
  mounted() {
    this.geCruuterCity();
  }
};
</script>
 
<style lang="scss" scoped>
.travel-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: $bg-color;
  .travel-search {
    height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    padding: 10px;
    .search {
      flex: 1;
      text-align: center;
      input {
        width: 80%;
        border-radius: 5px;
        padding: 5px;
      }
    }
    .optionCity {
      color: #ffffff;
    }

    i {
      font-size: 14px;
      font-weight: 100;
    }
  }

  .move-enter-to,
  .move-leave {
    transform: translateX(0%);
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 0.3s linear;
  }
  .move-enter,
  .move-leave-to {
    transform: translateX(-100%);
  }
}
</style>