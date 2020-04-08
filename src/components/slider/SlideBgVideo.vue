<template>
  <div class="slide-bg-video-container">
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
    <div v-if="condition" class="slide-bg-vidoe__controller">
      <VideoDuration />
      <VideoMuted />
    </div>
  </div>
</template>

<script>
import VideoDuration from '@/components/VideoDuration';
import VideoMuted from '@/components/VideoMuted';

export default {
  name: 'SlideBgVideo',
  components: {
    VideoDuration,
    VideoMuted
  },
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
    controller: {
      type: Boolean,
      default: false
    }
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