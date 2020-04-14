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
        :key="index"
        class="image-gallery__image-item"
        :style="{
          backgroundImage: handleImgSrc(index)
        }"
      />
    </div>
    <div
      :class="{
        'image-gallery__focus': true,
        'image-gallery__focus--active': currentSlide <= $store.state.galleryScript[0],
      }"
      :style="{ backgroundImage: handleImgSrc(centerImageIndex) }"
    />
  </div>
</template>

<script>
import { autoResize_3, sendGaMethods } from "@/mixins/masterBuilder.js";

const row = { mob: 5, pad: 7, pc: 11 };

export default {
  name: 'ImageGallery',
  mixins: [autoResize_3, sendGaMethods],
  computed: {
    currentSlide() {
      return this.$store.state.currentSlide || 1;
    },
    isSlideAtGallery() {
      return this.$store.state.galleryScript.includes(this.currentSlide);
    },
    imageAmount() {
      const ratio = window.innerHeight / window.innerWidth;
      
      return Math.ceil(Math.pow(row[this.deviceType] + 1, 2) * ratio) + row[this.deviceType] * 2;
    },
    centerImageIndex() {
      return Math.floor(row[this.deviceType] * 2.5);
    },
  },
  methods: {
    handleImgSrc(index) {
      const FOLDER = this.$store.state.folder;
      // function center(device) {
      //   return 'url(' + require(`~/img/${FOLDER}/slide_3/${device}.jpg`) + ')';
      // }
      function center() {
        return 'url(' + require(`~/img/${FOLDER}/slide_3/sqr.jpg`) + ')';
      }
      function other() {
        const USE_IMG = index % 49 + 1;
        return 'url(' + require(`~/img/${FOLDER}/gallery/${USE_IMG}.jpg`) + ')';
      }

      if (index === this.centerImageIndex) return center(this.deviceType);
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
// .image-gallery {
//   will-change: transform;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   overflow: hidden;
//   width: 1110%;
//   height: 1110%;
//   transform-origin: 0 0;
//   transition: .666s ease-in-out;
//   @include pad {
//     width: 1150%;
//     height: 1150%;
//   }
//   @include pc {
//     width: 1200%;
//     height: 1200%;
//   }
//   &.image-gallery--zoom-layer-1 {
//     transform: scale(0.095) translate(-50%, -50%);
//     @include pad {
//       transform: scale(0.105) translate(-50%, -45%);
//     }
//     @include pc {
//       transform: scale(0.115) translate(-50%, -45%);
//     }
//   }
//   &.image-gallery--zoom-layer-2 {
//     transform: scale(0.155) translate(-50%, -35%);
//     @include pad {
//       transform: scale(0.185) translate(-50%, -32%);
//     }
//     @include pc {
//       transform: scale(0.195) translate(-50%, -42%);
//     }
//   }
//   &.image-gallery--zoom-layer-3 {
//     transform: scale(1) translate(-50%, -558vw);
//     @include pad {
//       transform: scale(1) translate(-50%, -405vw);
//     }
//     @include pc {
//       transform: scale(1) translate(-50%, -275vw);
//     }
//   }
// }
.image-gallery {
  will-change: transform;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .666s ease-in-out;
  transform-origin: 50% 46vw;
  @include pad {
    transform-origin: 50% 34.5vw;
  }
  @include pc {
    width: 105%;
    left: -2.5%;
    transform-origin: 50% 23.25vw;
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
    transform: scale(10.5);
    @include pad {
      transform: scale(11.5);
    }
    @include pc {
      transform: scale(11);
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
  background-position: center;
  @include pad {
    width: 14.28%;
    padding-top: 14.28%;
  }
  @include pc {
    width: 9.08%;
    padding-top: 9.08%;
  }
}
.image-gallery__focus {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(0.3);
  transform-origin: 50% 30%;
  transition: .5s .222s ease-in-out;
  &.image-gallery__focus--active {
    opacity: 1;
    transform: scale(1.05);
    transition: .5s ease-in-out;
  }
}
</style>