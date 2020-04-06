<template>
  <video
    :id="'video-' + trigger"
    class="slide-bg-video"
    :autoplay="+vidIndex === 0"
    loop
    muted
    webkit-playsinline
    :poster="posterSrc"
  >
    <source :src="videoSrc" type="video/mp4">
    <p>Your browser doesn't support HTML5 video.</p>
  </video>
</template>

<script>
export default {
  name: 'SlideBgVideo',
  props: {
    posterSrc: {
      type: String,
      default: null,
    },
    videoSrc: {
      type: String,
      default: null,
    },
    vidIndex: {
      type: Number,
      required: true,
    },
    trigger: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 100%;
  transform: translateX(-50%) translateY(-50%);
  @include pc {
    min-width: 100%;
    width: auto;
  }
}
</style>