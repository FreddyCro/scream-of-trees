<template>
  <div class="slide-bg">
    <h1>{{currentSlide}}</h1>
    <div v-for="(item, index) in sliderImgScript"
      :key="index + 'img'"
      :class="{
        'slide-bg__item-container': true,
        'slide-bg__item-container--active': item.trigger === currentSlide
      }"
    >
      <img
        v-if="item.type === 'i' && item.imagePath"
        :src="handleMediaSrc(item.imagePath, 'img')"
        :alt="title"
      >
    </div>
    <div v-for="(item, index) in sliderVidScript"
      :key="index + 'vid'"
      :class="{
        'slide-bg__item-container': true,
        'slide-bg__item-container--active': item.trigger === currentSlide
      }"
    >
      <video
        v-if="item.type === 'v' && item.videoPath"
        :id="'video-' + item.trigger"
        :autoplay="+index === 0"
        loop
        muted
        webkit-playsinline
        :poster="handleMediaSrc(item.videoPath, 'poster')"
      >
        <source :src="handleMediaSrc(item.videoPath, 'vid')" type="video/mp4">
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from "@/mixins/masterBuilder.js";

const typeDictionary = {
  img: '.jpg',
  vid: '.mp4',
  poster: '_poster.jpg'
}

export default {
  name: "SlideBg",
  mixins: [autoResize_3, selectSrcMethod_3],
  data() {
    return {
      title: document.querySelector('title').innerHTML,
    }
  },
  computed: {
    currentSlide() {
      return this.$store.state.currentSlide || 1;
    },
    sliderImgScript() {
      return this.$store.state.script.filter( e => e.type === 'i' ) || null;
    },
    sliderVidScript() {
      return this.$store.state.script.filter( e => e.type === 'v' ) || null;
    },
    config() {
      return {
        hasTabletSrc:
          this.sliderScript[this.currentSlide - 1] &&
          this.sliderScript[this.currentSlide - 1].hasTablet
      };
    },
  },
  methods: {
    handleMediaSrc(path, type) {
      const ROOT = `${this.$store.state.folder}${path}`;
      const FILE = typeDictionary[type];
      const SRC = {
        mob: require(`~/img/${ROOT}mob${FILE}`),
        pad: require(`~/img/${ROOT}` + (this.hasTabletSrc ? `pad${FILE}` : `mob${FILE}`)),
        pc: require(`~/img/${ROOT}pc${FILE}`)
      };

      return this.selectSrc_3(SRC.mob, SRC.pad, SRC.pc);
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
}

.slide-bg__item-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.slide-bg__item-container--active {
    opacity: 1;
  }
  img, video {
    width: auto;
    height: 100%;
    @media screen and (orientation:landscape) {
      width: 100%;
      height: auto;
    }
    @include pc {
      @media screen and (orientation:landscape) {
        width: auto;
        height: 100%;
      }
    }
    
  }
}
</style>