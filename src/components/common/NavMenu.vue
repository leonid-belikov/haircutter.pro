<template>
  <nav :class="propClass">
    <router-link to="/" exact>About</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/events">Events</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    propClass: String
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
}

nav a, nav a:hover, nav a:active, nav a:visited {
  text-decoration: none;
  color: #999;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  position: relative;
  transition: 200ms;
}

nav a.router-link-active {
  color: #fff;
}

/*header*/

nav.header {
  flex-grow: 1;
  justify-content: flex-end;
  padding-top: 2px;
}

nav.header a:not(:first-child) {
  margin-left: 30px;
}

@keyframes showUnderline {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

nav.header a.router-link-active:after {
  content: '';
  display: flex;
  height: 1px;
  width: 100%;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: -5px;
  animation: showUnderline 200ms;
}
/*header end*/

/*footer*/
nav.footer a, nav.footer a:hover, nav.footer a:active, nav.footer a:visited {
  font-size: 16px;
}
nav.footer a:not(:last-child) {
  margin-right: 30px;
}
/*footer end*/

</style>