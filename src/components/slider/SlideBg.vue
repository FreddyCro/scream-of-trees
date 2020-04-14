<template>
  <div class="slide-bg">
    <div v-for="(item, index) in sliderImgScript"
      :key="index + 'img'"
      :class="{
        'slide-bg__item-container': true,
        'slide-bg__item-container--active': item.trigger === currentSlide
      }"
    >
      <SlideBgImage 
        v-if="item.type === 'i' && item.imagePath && item.trigger !== $store.state.slideAmount"
        :imageSrc="handleMediaSrc(item.imagePath, 'img')"
        :trigger="item.trigger"
      />
      <!-- 封底圖片 -->
      <SlideBgImage
        v-if="item.trigger === $store.state.slideAmount"
        :imageSrc="require('~/img/last/' + selectSrc_3('mob', 'pad', 'pc') + '.jpg')"
        :trigger="item.trigger"
      />
    </div>
    <div v-for="(item, index) in sliderVidScript"
      :key="index + 'vid'"
      :class="{
        'slide-bg__item-container': true,
        'slide-bg__item-container--active': item.trigger === currentSlide
      }"
    >
      <SlideBgVideo
        v-if="item.type === 'v' && item.videoPath"
        :vidIndex="index"
        :trigger="item.trigger"
        :posterSrc="handleMediaSrc(item.videoPath, 'poster')"
        :videoSrc="handleVideoSrc(item.videoPath)"
        :controller="item.videoController"
        :squareType="item.squareType"
        :slowMotion="item.slowMotion || 0"
      />
    </div>
  </div>
</template>

<script>
import { autoResize_3, selectSrcMethod_3 } from "@/mixins/masterBuilder.js";
import SlideBgImage from '@/components/slider/SlideBgImage.vue';
import SlideBgVideo from '@/components/slider/SlideBgVideo.vue';

const typeDictionary = {
  img: '.jpg',
  vid: '.mp4',
  poster: '_poster.jpg'
}

export default {
  name: "SlideBg",
  mixins: [autoResize_3, selectSrcMethod_3],
  components: {
    SlideBgImage,
    SlideBgVideo,
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
    handleVideoSrc(path) {
      const ROOT = `${this.$store.state.folder}${path}`;
      const SRC = {
        mob: `https://p3.udn.com.tw/scream-of-trees/${ROOT}mob.mp4`,
        pad: `https://p3.udn.com.tw/scream-of-trees/${ROOT}` + (this.hasTabletSrc ? `pad.mp4` : `mob.mp4`),
        pc: `https://p3.udn.com.tw/scream-of-trees/${ROOT}pc.mp4`
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
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.slide-bg__item-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.slide-bg__item-container--active {
    opacity: 1;
  }
}
</style>