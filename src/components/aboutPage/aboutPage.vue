<template>
  <div class="page about-page">

    <section class="personal-info">
      <div class="avatar">
        <img src="/img/avatar.jpg" alt="">
      </div>
      <div class="about">
        <p class="page-quote">"{{this.$t("about-quote")}}"</p>
        <p class="page-quote-author">{{this.$t("about-quote-author")}}</p>
        <p>{{this.$t("personal-info-1")}}</p>
        <p>{{this.$t("personal-info-2")}}</p>
      </div>
    </section>

  </div>
</template>

<script>
  import {checkBodyWidth} from "@/utils/helpers";

  export default {
    name: "homePage",
    mounted() {
      checkBodyWidth()
    }
  }
</script>

<style scoped>

.about-page {
}

.personal-info {
  align-items: center;
  justify-content: space-between;
  height: 550px;
}

.avatar {
  display: flex;
}

.avatar img {
  height: 550px;
}

.about {
  width: 650px;
  height: 100%;
  margin-left: 150px;
  padding-top: 40px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about p {
  width: 400px;
  line-height: 28px;
  text-align: justify;
}

.about p:not(:last-child) {
  margin-bottom: 35px;
}

.about p.page-quote {
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 0;
}

.about p.page-quote-author {
  font-size: 12px;
  text-align: right;
}

</style>