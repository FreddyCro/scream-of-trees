<template>
<div class="VideoMuted">
  <div class="icon-wrapper">
    <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
      <circle class="bg" cx="10" cy="10" r="8" />
      <circle class="progress" cx="10" cy="10" r="8" />
    </svg>
    <img class="controlIcon controlMute" v-if="isMuted" :src="require('~/img/play/voice_2.png')" alt="voice on">
    <img class="controlIcon controlVoice" v-else :src="require('~/img/play/voice_1.png')" alt="voice off">
  </div>
</div>
</template>

<script>
export default {
  name: 'VideoMuted',
  props: {
    isMuted: {
      type: Boolean,
      // default: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.VideoMuted {
  position: relative;
  cursor: pointer;
  @include clean-tap;
  .icon-wrapper {
    .stat-circle {
      width: 40px;
      height: 40px;
      transform: rotate(-90deg);
      circle.bg {
        fill: none;
        stroke: #aaaaaa;
        stroke-width: 0.8;
        opacity: 0.4;
      }
      circle.progress {
        fill: none;
        stroke: #fff;
        stroke-width: 0.8;
        stroke-dasharray: 51 51;
        stroke-dashoffset: -51;
        stroke-linecap: round;
      }
      text {
        font-size: 5px;
        text-anchor: middle;
        fill: #bbb;
        display: none;
      }
    }
    .controlIcon {
      position: absolute;
      width: 40%;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -65%);
      opacity: 0.8;
    }
  }
}
</style>
