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
    },
    events: [
      {
        name: 'event5',
        date: '2020-06-25',
        imgCount: 5,
      },
      {
        name: 'event4',
        date: '2020-02-14',
        imgCount: 5,
      },
      {
        name: 'event3',
        date: '2019-12-10',
        imgCount: 5,
      },
      {
        name: 'event2',
        date: '2019-09-03',
        imgCount: 5,
      },
      {
        name: 'event1',
        date: '2019-05-11',
        imgCount: 5,
      },
    ]
  },
  getters: {
    socnets: s => s.socnets,
    events: s => s.events,
  },
})