import Vue from 'vue'
import Vuex from 'vuex'
import LogoVK from "@/components/svg/LogoVK";
import LogoIG from "@/components/svg/LogoIG";
import LogoTT from "@/components/svg/LogoTT";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    socnets: {
      vk: {
        icon: LogoVK,
        url: 'https://vk.com/haircutterpro',
      },
      ig: {
        icon: LogoIG,
        url: 'https://www.instagram.com/haircutter.pro',
      },
      tt: {
        icon: LogoTT,
        url: 'https://www.tiktok.com/@haircutterpro',
      },
    }
  },
  getters: {
    socnets: s => s.socnets
  },
})