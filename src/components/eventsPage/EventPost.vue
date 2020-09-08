<template>
  <div class="event">
    <div class="event__label">
      <transition name="fade" appear>
        <img
            :key="selectedPictureIndex"
            :src="selectedPicture"
            alt=""
        >
      </transition>
      <div class="arrows">
        <div class="arrow left" @click="handleClickLeftArrow">
          <i class="fa fa-2x fa-chevron-left"></i>
        </div>
        <div class="arrow right" @click="handleClickRightArrow">
          <i class="fa fa-2x fa-chevron-right"></i>
        </div>
      </div>
    </div>
    <div class="event__description">
      <div class="event__title">
        {{ title }}
      </div>
      <div class="event__date">
        {{ new Date(event.date).toLocaleDateString() }}
      </div>
      <transition name="fade" mode="out-in">
        <div :key="fullMode ? 'full' : 'short'" class="event__text text-muted">
          {{ text }}
        </div>
      </transition>
    </div>
    <div class="event__toolbar">
      <div
          class="event__open-btn"
          @click="handleClickDetailsBtn">
        {{ detailsBtnText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPost",
  props: {
    event: Object,
  },
  data() {
    return {
      fullMode: false,
      selectedPictureIndex: 1,
    }
  },
  computed: {
    title() {
      return this.$t(`events-list.${this.event.name}.title`)
    },
    shortDescription() {
      return this.$t(`events-list.${this.event.name}.shortDescription`)
    },
    description() {
      return this.$t(`events-list.${this.event.name}.description`)
    },
    detailsBtnText() {
      if (this.fullMode) return this.$t('hideDetails')
      return this.$t('details')
    },
    text() {
      return this.fullMode ? this.description : this.shortDescription
    },
    selectedPicture() {
      return `/img/events/${this.event.name}/${this.selectedPictureIndex}.jpg`
    },
  },
  methods: {
    handleClickDetailsBtn() {
      this.fullMode = !this.fullMode
    },
    getNext(i) {
      if (i === this.event.imgCount) return 1
      return ++i
    },
    getPrev(i) {
      if (i === 1) return this.event.imgCount
      return --i
    },
    handleClickLeftArrow(event) {
      event.stopPropagation()
      this.selectedPictureIndex = this.getPrev(this.selectedPictureIndex)
    },
    handleClickRightArrow(event) {
      event.stopPropagation()
      this.selectedPictureIndex = this.getNext(this.selectedPictureIndex)
    },
  },
}
</script>

<style scoped>

.event {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 13px 17px 14px -20px #888, -13px 17px 14px -20px #888;
}

.event__label {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 80%;
  min-height: 500px;
  max-height: 670px;
  display: flex;
  align-items: flex-end;
}

.event__label img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}

.arrows {
  display: flex;
  width: 100%;
  min-height: 500px;
  max-height: 670px;
  z-index: 999;
  position: relative;
}

.arrow {
  width: 50%;
  min-height: 500px;
  max-height: 670px;
  display: flex;
  align-items: center;
  padding: 40px;
  cursor: pointer;
}

.arrow:hover i {
  color: #fff;
}

.arrow.left {
  justify-content: flex-start;
}

.arrow.right {
  justify-content: flex-end;
}

.event__description {
  padding: 30px 40px;
}

.event__title {
  position: absolute;
  top: 30px;
  left: -20px;
  z-index: 10;
  background-color: rgba(221, 221, 221, 0.9);
  padding: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

.event__date {
  font-size: 12px;
  margin-bottom: 20px;
}

.event__text {
  line-height: 22px;
  text-align: justify;
  height: auto;
  overflow: hidden;
  /*transition: 350ms;*/
}

.event__toolbar {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}

.event__open-btn {
  background-color: #eee;
  padding: 15px 30px;
  cursor: pointer;
  transition: 200ms;
}

.event__open-btn:hover {
  background-color: #ddd;
}

.event__open-btn:active {
  background-color: #aaa;
}

.fade-leave-active, .fade-enter-active {
  transition: 200ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 576px) {
  .event__title {
    left: 30px;
  }
}

</style>