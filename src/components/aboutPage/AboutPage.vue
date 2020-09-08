<template>
  <div class="page about-page">

    <section class="personal-info">
      <div class="avatar">
        <img src="/img/avatar.jpg" alt="">
        <div class="socnets-box">
          <socnets/>
        </div>
        <i class="fa fa-2x fa-chevron-down"></i>
      </div>
      <div class="about">
        <p class="page-quote">"{{this.$t("about-quote")}}"</p>
        <p class="page-quote-author">{{this.$t("about-quote-author")}}</p>
        <p>{{this.$t("personal-info-1")}}</p>
        <p>{{this.$t("personal-info-2")}}</p>
      </div>
    </section>

    <section class="timeline">
      <div class="step" v-for="step in steps" :key="step.id" :ref="`timelineStep-${step.id}`">
        <div class="year">{{step.year}}</div>
        <div class="picture">
          <img :src="step.imgSrc" alt="">
        </div>
        <div class="description">
          <div class="title">
            {{step.title}}
          </div>
          <div class="text text-muted">
            {{step.text}}
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import {checkBodyWidth} from "@/utils/helpers";
  import Socnets from "@/components/common/Socnets";

  export default {
    name: "AboutPage",
    components: {Socnets},
    computed: {
      steps() {
        return [
          {
            id: 1,
            imgSrc: '/img/step1.jpg',
            year: this.$t("timeline.step1.year"),
            title: this.$t("timeline.step1.title"),
            text: this.$t("timeline.step1.text"),
          },
          {
            id: 2,
            imgSrc: '/img/step2.jpg',
            year: this.$t("timeline.step2.year"),
            title: this.$t("timeline.step2.title"),
            text: this.$t("timeline.step2.text"),
          },
          {
            id: 3,
            imgSrc: '/img/step3.jpg',
            year: this.$t("timeline.step3.year"),
            title: this.$t("timeline.step3.title"),
            text: this.$t("timeline.step3.text"),
          },
          {
            id: 4,
            imgSrc: '/img/step4.jpg',
            year: this.$t("timeline.step4.year"),
            title: this.$t("timeline.step4.title"),
            text: this.$t("timeline.step4.text"),
          },
        ]
      }
    },
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
  justify-content: center;
  flex-wrap: wrap;
}

.avatar {
  position: relative;
  display: flex;
  box-shadow: 4px 16px 20px -15px #444, -4px 16px 20px -15px #444;
  overflow: hidden;
  width: 100%;
}

.avatar img {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

.socnets-box {
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 200ms;
  z-index: 10;
}

.avatar:hover .socnets-box {
  bottom: 0;
}

.avatar i {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  margin-bottom: 15px;
  opacity: 0.5;
  transition: 100ms;
  z-index: 1;
}

.avatar:hover i {
  opacity: 0;
}

.about {
  margin-top: 40px;
  padding: 40px 20px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about p {
  line-height: 22px;
}

.about p:not(:last-child) {
  margin-bottom: 20px;
}

.about p.page-quote {
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 0;
  width: 100%;
}

.about p.page-quote-author {
  font-size: 12px;
  text-align: right;
  width: 100%;
}

.timeline {
  position: relative;
  display: flex;
  justify-content: space-around;
  padding-top: 70px;
  padding-bottom: 40px;
  flex-wrap: wrap;
}

.step {
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 16px 20px -20px #444, -4px 16px 20px -20px #444;
}

.step:before {
  content: '';
  display: block;
  position: absolute;
  background-color: #eee;
  height: 150px;
  width: 112%;
  top: -90px;
  left: -6%;
}

.step:not(:last-child) {
  margin-bottom: 150px;
}

.year {
  position: absolute;
  font-family: 'Work Sans', sans-serif;
  font-size: 32px;
  font-weight: bold;
  left: 0;
  top: -40px;
  color: #444;
}

.picture {
  height: 320px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}

.picture img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

.description {
  flex-grow: 1;
  background-color: #fff;
  padding: 30px 40px;
}

.title {
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.text {
  line-height: 22px;
}

@media (min-width: 576px) {
  .avatar {
    width: 500px;
  }
}

@media (min-width: 768px) {
  .avatar {
    width: 350px;
  }
  .personal-info {
    flex-wrap: nowrap;
    align-items: flex-start;
  }
  .avatar {
    flex-shrink: 0;
    margin-right: 55px;
  }
  .about {
    padding: 40px 40px 60px;
    margin-top: 0;
  }
  .about p {
  }
}

@media (min-width: 992px) {
  .avatar {
    width: 522px;
  }
  .step {
    width: 45%;
  }
  .step:nth-child(3) {
    margin-bottom: 0;
  }
}

</style>