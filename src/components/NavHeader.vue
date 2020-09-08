<template>
  <div class="nav-header">
    <div class="container">
      <router-link to="/" exact tag="div" class="logo">
        <img src="/img/logo_white.png" alt="">
        <h1>haircutter.pro</h1>
      </router-link>
      <nav-menu prop-class="header"/>
      <div class="burger-menu">
        <i class="fa fa-2x fa-reorder" @click="handleMenuIconClick"></i>
        <ul
            v-if="showMainMenu"
            class="main-menu"
            v-click-outside="handleClickOutsideMainMenu">
          <li
              v-for="item in menuItems"
              class="main-menu-item"
              :class="{selected: item.path === selectedMenuItem}"
              :key="item.name"
              @click="() => handleMenuItemClick()">
            <router-link :to="item.path" exact>
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="translate">
        <i class="fa fa-2x fa-globe" @click="handleLangIconClick"></i>
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
      showMainMenu: false,
      locales: [
        {
          name: 'ru',
          title: 'Русский',
        },
        {
          name: 'en',
          title: 'English',
        },
      ],
      menuItems: [
        {
          name: 'about',
          path: '/',
          title: this.$t('about'),
        },
        {
          name: 'gallery',
          path: '/gallery',
          title: this.$t('gallery'),
        },
        {
          name: 'events',
          path: '/events',
          title: this.$t('events'),
        },
      ],
    }
  },
  computed: {
    selectedLang() {
      return this.$i18n.locale
    },
    selectedMenuItem() {
      return this.$route.path
    },
  },
  methods: {
    handleLocaleClick(lang) {
      this.$i18n.locale = lang;
      this.showLangMenu = false;
    },
    handleLangIconClick() {
      this.showMainMenu = false;
      this.showLangMenu = !this.showLangMenu
    },
    handleClickOutsideLangMenu() {
      if (this.showLangMenu) {
        this.showLangMenu = false
      }
    },
    handleMenuItemClick() {
      this.showMainMenu = false;
    },
    handleMenuIconClick() {
      this.showLangMenu = false;
      this.showMainMenu = !this.showMainMenu
    },
    handleClickOutsideMainMenu() {
      if (this.showMainMenu) {
        this.showMainMenu = false
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
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: none;
}

.logo h1 {
  font-family: 'Work Sans', 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 24px;
}

.burger-menu {
  flex-grow: 1;
  justify-content: flex-end;
}

.translate, .burger-menu {
  display: flex;
  align-items: center;
  margin-left: 30px;
  padding-top: 5px;
  cursor: pointer;
  position: relative;
}

.translate i, .burger-menu i {
  opacity: 0.5;
  transition: 200ms;
}

.translate i:hover, .burger-menu i:hover {
  opacity: 1;
}

.lang-menu, .main-menu {
  position: absolute;
  bottom: -75px;
  right: 0;
  background: #fff;
  color: #000;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 999;
  border-radius: 0;
  box-shadow: 4px 6px 7px -7px #444, -4px 6px 7px -7px #444;
}

.main-menu {
  bottom: -104px;
}

.lang-menu:before, .main-menu:before {
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

.lang-item, .main-menu-item {
  list-style: none;
  padding: 5px 25px;
  width: 125px;
  transition: 200ms;
}

.lang-item.selected, .main-menu-item.selected {
  font-weight: 700;
}

.lang-item:hover, .main-menu-item:hover {
  background-color: #ddd;
}

.lang-item:active, .main-menu-item:active {
  background-color: #555;
}

.main-menu-item a, .main-menu-item:hover a, .main-menu-item a:active, .main-menu-item a:visited {
  text-decoration: none;
  color: inherit;
}

.header {
  display: none;
}

@media (min-width: 576px) {
  .logo img {
    display: block;
    height: 100px;
    width: 100px;
  }
  .logo h1 {
    font-size: 32px;
  }
}

@media (min-width: 768px) {
  .header {
    display: flex;
  }
  .burger-menu {
    display: none;
  }
}

</style>