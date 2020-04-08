<template>
  <div :class="{
      'image-gallery-container': true,
      'image-gallery-container--active': isSlideAtGallery,
    }"
  >
    <div
      :class="{
        'image-gallery': true,
        'image-gallery--zoom-layer-1': currentSlide >= $store.state.galleryScript[2],
        'image-gallery--zoom-layer-2': currentSlide === $store.state.galleryScript[1],
        'image-gallery--zoom-layer-3': currentSlide <= $store.state.galleryScript[0]
      }"
    >
      <div
        v-for="(item, index) in imageAmount"
        :key="index" class="image-gallery__image-item"
        :style="{
          backgroundImage: handleImgSrc(index)
        }"
      />
    </div>
  </div>
</template>

<script>
import { autoResize_3 } from "@/mixins/masterBuilder.js";

const row = { mob: 5, pad: 7, pc: 11 };

export default {
  name: 'ImageGallery',
  mixins: [autoResize_3],
  computed: {
    currentSlide() {
      return this.$store.state.currentSlide || 1;
    },
    isSlideAtGallery() {
      return this.$store.state.galleryScript.includes(this.currentSlide);
    },
    imageAmount() {
      const ratio = window.innerHeight / window.innerWidth;
      return Math.ceil(Math.pow(row[this.deviceType], 2) * ratio) + row[this.deviceType];
    },
    centerImageIndex() {
      return Math.floor(row[this.deviceType] * 2.5);
    },
  },
  methods: {
    handleImgSrc(index) {
      const FOLDER = this.$store.state.folder;
      function center() {
        return 'url(' + require(`~/img/${FOLDER}/slide_3/pad.jpg`) + ')';
      }
      function other() {
        const USE_IMG = index % 50 + 1;
        return 'url(' + require(`~/img/${FOLDER}/gallery/${USE_IMG}.jpg`) + ')';
      }

      if (index === this.centerImageIndex) return center();
      return other();
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.image-gallery-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  transition: .666s ease-in-out;
  &.image-gallery-container--active {
    opacity: 1;
  }
}
.image-gallery {
  will-change: transform;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .666s ease-in-out;
  transform-origin: 50% 46.5vw;
  @include pad {
    transform-origin: 50% 35vw;
  }
  @include pc {
    width: 105%;
    left: -2.5%;
    transform-origin: 50% 25vw;
  }
  &.image-gallery--zoom-layer-1 {
    transform: scale(1);
  }
  &.image-gallery--zoom-layer-2 {
    transform: scale(1.7);
    @include pad {
      transform: scale(2.35);
    }
    @include pc {
      transform: scale(2.5);
    }
  }
  &.image-gallery--zoom-layer-3 {
    transform: scale(11);
    @include pad {
      transform: scale(11.5);
    }
    @include pc {
      transform: scale(15);
    }
  }
}

.image-gallery__image-item {
  position: relative;
  float: left;
  width: 20%;
  padding-top: 20%;
  border: 1px solid #000000;
  background-size: cover;
  @include pad {
    width: 14.28%;
    padding-top: 14.28%;
  }
  @include pc {
    width: 9.08%;
    padding-top: 9.08%;
  }
}
</style>