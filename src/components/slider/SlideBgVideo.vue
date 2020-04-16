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
    <div
        v-if="$store.state.useVideoControl"
        :class="{
          'slide-bg-video__controller': true,
          'slide-bg-video__controller--active': controllerActive,
        }"
      >
        <div class="slide-bg-video__controller__button" @click="handleMutedClick">
          <VideoMuted :isMuted="$store.state.videoStatus.isMuted" />
        </div>
        <div class="slide-bg-video__controller__button" @click="handlePlayClick">
          <VideoDuration
            :currentTime="$store.state.videoStatus.currentTime"
            :totalTime="$store.state.videoStatus.totalTime"
            :isPlay="$store.state.videoStatus.isPlay"
          />
        </div>
      </div>
  </div>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";

import VideoDuration from '@/components/VideoDuration';
import VideoMuted from '@/components/VideoMuted';

export default {
  name: "SlideBgVideo",
  mixins: [sendGaMethods],
  components: {
    VideoDuration,
    VideoMuted
  },
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
    },
    slowMotion: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      gaStageTime: 3,
      gaStageGap: 3,
    };
  },
  computed: {
    videoActive() {
      return this.trigger === this.$store.state.currentSlide;
    },
    controllerActive() {
      return this.$store.state.videoStatus.controllerActive && this.$store.state.currentSlide === +this.trigger;
    }
  },
  watch: {
    videoActive: {
      handler(value) {
        if (this.controller) this.$store.dispatch('updateControllerActive', value);
      }
    }
  },
  methods: {
    handleUpdateVideoTime(video) {
      video.ontimeupdate = (e) => {
        if (!this.$store.state.videoStatus.controllerActive) return ;
        this.handleProgressGA(e.target.currentTime);
        this.$store.dispatch('updateVideoTime', {
          currentTime: e.target.currentTime,
          totalTime: e.target.duration
        });
      }
    },
    handleProgressGA(currentTime) {
      if (currentTime < 1) this.gaStageTime = this.gaStageGap;
      if (currentTime > this.gaStageTime) {
        this.sendGA({
          category: 'video',
          action: 'autoplay',
          label: `autoplay_slide-${this.$store.state.currentSlide}觀看${this.gaStageTime}秒`
        })

        this.gaStageTime += this.gaStageGap ;
      }
    },
    handleMutedClick() {
      this.sendGA({
        category: 'video',
        action: 'click',
        label: `sound slide-${this.index}`
      });
      this.$store.dispatch('updateVideoMute');
    },
    handlePlayClick() {
      this.sendGA({
        category: 'video',
        action: 'click',
        label: `pause slide-${this.index}`
      });
      this.$store.dispatch('updateVideoPlay');
    },
  },
  mounted() {
    const video = document.getElementById(`video-${this.trigger}`);
    if (this.slowMotion) video.playbackRate = this.slowMotion;
    if (this.controller) this.handleUpdateVideoTime(video);
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-bg-video-container {
  position: relative;
  pointer-events: none;
  width: 100%;
  height: 100%;
  background-color: black;
}
.slide-bg-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translateX(-50%) translateY(-50%);

  &.slide-bg-video--square {
    width: 80%;
    height: auto;
    object-fit: contain;
    transform: translateX(-50%) translateY(-72.5%);
    @include pc {
      width: 100%;
      transform: translateX(-50%) translateY(-50%);
      @media screen and (max-width: 1366px) {
        height: 100%;
        width: auto;
      }
    }
  }
}
.slide-bg-video__controller {
  position: absolute;
  pointer-events: none;
  left: 50%;
  top: calc(50% + 35vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .333s ease-in-out;
  @include pc {
    position: fixed;
    left: initial;
    right: 0;
    margin-right: 10px;
    top: 50px;
    transform: translate(0, 0);
  }
  &.slide-bg-video__controller--active {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>