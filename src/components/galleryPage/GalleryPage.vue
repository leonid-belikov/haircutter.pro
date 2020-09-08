<template>
  <div class="page gallery-page">

    <section class="pictures">
      <div
          v-for="index in imgNumber"
          :key="index"
          class="picture"
          :class="{big: bigPictures.includes(index)}"
          @click="() => handleClickPicture(index)">
        <img :src="`/img/gallery/gallery${index}.jpg`" alt="">
      </div>
    </section>

    <div class="modal" v-if="!!selectedPictureIndex" @click="handleClickModalDummy">
        <div class="modal__content" @wheel="handlerScrollOnModal">
          <i class="fa fa-2x fa-times"></i>
          <transition name="fade" appear>
          <img
              :key="selectedPictureIndex"
              :src="selectedPicture"
              alt=""
              class="modal__content-img"
          />
          </transition>
          <div class="arrow left" @click="handleClickLeftArrow">
            <i class="fa fa-2x fa-chevron-left"></i>
          </div>
          <div class="arrow right" @click="handleClickRightArrow">
            <i class="fa fa-2x fa-chevron-right"></i>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
import {checkBodyWidth} from "@/utils/helpers";
import vClickOutside from 'v-click-outside'

const IMAGES_NUMBER = 21

const getNext = i => {
  if (i === IMAGES_NUMBER) return 1
  return ++i
}

const getPrev = i => {
  if (i === 1) return IMAGES_NUMBER
  return --i
}

export default {
  name: "GalleryPage",
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      bigPictures: [1, 8, 13, 20],
      selectedPictureIndex: null,
      imgNumber: IMAGES_NUMBER,
    }
  },
  computed: {
    selectedPicture() {
      return `/img/gallery/gallery${this.selectedPictureIndex}.jpg`
    }
  },
  methods: {
    handleClickPicture(index) {
      this.selectedPictureIndex = index
      document.body.classList.add('modal-open')
    },
    handleClickModalDummy() {
      this.selectedPictureIndex = null
      document.body.classList.remove('modal-open')
    },
    handleClickLeftArrow(event) {
      event.stopPropagation()
      this.selectedPictureIndex = getPrev(this.selectedPictureIndex)
    },
    handleClickRightArrow(event) {
      event.stopPropagation()
      this.selectedPictureIndex = getNext(this.selectedPictureIndex)
    },
    handlerScrollOnModal(event) {
      if (event.deltaY > 0) {
        this.selectedPictureIndex = getPrev(this.selectedPictureIndex)
      } else {
        this.selectedPictureIndex = getNext(this.selectedPictureIndex)
      }
    }
  },
  mounted() {
    checkBodyWidth()
  }
}
</script>

<style scoped>

.gallery-page {
}

.pictures {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: minmax(250px, 1fr);
}

.picture {
  background: linear-gradient(0deg, #444, #fff);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 250ms;
  box-shadow: none;
  opacity: 0.9;
  transform: scale(1);
}

.picture:hover {
  box-shadow: 4px 16px 20px -20px #444, -4px 16px 20px -7px #444;
  opacity: 1;
  transform: scale(1.01);
}

.picture.big {
  grid-column: span 1;
  grid-row: span 1;
}

.picture img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.modal i.fa-times {
  position: fixed;
  right: 30px;
  top: 15px;
}

.modal__content {
  position: relative;
  height: 80vh;
  width: 80vw;
  display: flex;
}

.modal__content img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

.arrow {
  position: relative;
  width: 50%;
  height: 100%;
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

.fade-enter-active, .fade-leave-active {
  transition: 500ms;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

@media (min-width: 768px) {
  .picture.big {
    grid-column: span 2;
    grid-row: span 2;
  }
}

@media (min-width: 992px) {
  .modal i.fa-times {
    position: absolute;
    right: -50px;
    top: -50px;
  }
}

</style>