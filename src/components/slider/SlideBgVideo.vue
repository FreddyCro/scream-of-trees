<template>
  <div class="slide-bg-video-container">
    <video
      :id="'video-' + trigger"
      :class="{
        'slide-bg-video': true,
        'slide-bg-video--square': squareType,
      }"
      :autoplay="+vidIndex === 0"
      loop
      muted
      playsinline
      webkit-playsinline
      :poster="posterSrc"
    >
      <source :src="videoSrc" type="video/mp4" />
      <p>Your browser doesn't support HTML5 video.</p>
    </video>
  </div>
</template>

<script>
export default {
  name: "SlideBgVideo",
  props: {
    posterSrc: {
      type: String,
      default: null
    },
    videoSrc: {
      type: String,
      default: null
    },
    vidIndex: {
      type: Number,
      required: true
    },
    trigger: {
      type: Number,
      required: true
    },
    controller: {
      type: Boolean,
      default: false
    },
    squareType: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    videoActive() {
      return this.trigger === this.$store.state.currentSlide;
    },
  },
  watch: {
    videoActive: {
      handler(value) {
        if (this.controller) this.$store.dispatch('updateControllerActive', value);
      }
    }
  },
  methods: {
    handleUpdateVideoTime() {
      const video = document.getElementById(`video-${this.trigger}`);
      video.ontimeupdate = (e) => {
        if (!this.$store.state.videoStatus.controllerActive) ;
        this.$store.dispatch('updateVideoTime', {
          currentTime: e.target.currentTime,
          totalTime: e.target.duration
        });
      }
    }
  },
  mounted() {
    if (this.controller) this.handleUpdateVideoTime();
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-bg-video-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
}
.slide-bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  min-height: 100%;
  transform: translateX(-50%) translateY(-50%);
  @include pc {
    @media screen and (max-width: 1366px) {
      height: 100%;
      width: auto;
    }
  }

  &.slide-bg-video--square {
    width: 80%;
    @include pc {
      width: 100%;
      @media screen and (max-width: 1366px) {
        height: 100%;
        width: auto;
      }
    }
  }
}
</style>