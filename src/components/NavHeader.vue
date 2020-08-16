<template>
  <div class="nav-header">
    <div class="container">
      <router-link to="/" exact tag="div" class="logo">
        <img src="/img/logo_white.png" alt="">
        <h1>haircutter.pro</h1>
      </router-link>
      <nav-menu prop-class="header"/>
      <div class="translate" @click="handleLangIconClick">
        <i class="fa fa-2x fa-globe"></i>
        <ul
            v-if="showLangMenu"
            class="lang-menu"
            v-click-outside="handleClickOutsideLangMenu">
          <li
              v-for="lang in locales"
              class="lang-item"
              :class="{selected: lang.name === selectedLang}"
              :key="lang.name"
              @click="() => handleLocaleClick(lang.name)">
            {{lang.title}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
import vClickOutside from 'v-click-outside'

export default {
  name: "NavHeader",
  components: {NavMenu},
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      showLangMenu: false,
      locales: [
        {
          name: 'ru',
          title: 'русский',
        },
        {
          name: 'en',
          title: 'english',
        },
      ]
    }
  },
  computed: {
    selectedLang() {
      return this.$i18n.locale
    }
  },
  methods: {
    handleLocaleClick(lang) {
      this.$i18n.locale = lang;
      this.showLangMenu = false;
    },
    handleLangIconClick() {
      this.showLangMenu = !this.showLangMenu
    },
    handleClickOutsideLangMenu() {
      if (this.showLangMenu) {
        this.showLangMenu = false
      }
    },
  }
}
</script>

<style scoped>
.nav-header {
  height: 120px;
  background: black;
  color: #fff;
  display: flex;
}

.logo {
  cursor: pointer;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.logo h1 {
  font-family: 'Work Sans', 'Montserrat', sans-serif;
  font-weight: 700;
}

.translate {
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding-top: 5px;
  cursor: pointer;
  position: relative;
}

.translate i {
  opacity: 0.5;
  transition: 200ms;
}

.translate i:hover {
  opacity: 1;
}

.lang-menu {
  position: absolute;
  bottom: -75px;
  right: 0;
  background: #fff;
  border: 1px solid #000;
  color: #000;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 999;
}

.lang-menu:before {
  content: '';
  display: block;
  height: 8px;
  width: 12px;
  position: absolute;
  top: -8px;
  right: 6px;
  box-sizing: border-box;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #fff;
}

.lang-item {
  list-style: none;
  padding: 5px 25px;
  width: 120px;
  transition: 200ms;
}

.lang-item.selected {
  font-weight: 700;
}

.lang-item:hover {
  background-color: #ddd;
}

.lang-item:active {
  background-color: #555;
}

</style>