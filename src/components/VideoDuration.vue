<template>
<div class="VideoDuration">
  <div class="loading">
    <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
      <circle class="bg" cx="10" cy="10" r="8" />
      <circle class="progress" cx="10" cy="10" r="8" />
      <text x="62%" y="70%">{{ updateVideoPercent }}%</text>
    </svg>
    <img class="controlIcon controlStop" v-if="isPlay" :src="require('~/img/play/play_1.png')" alt="play">
    <img class="controlIcon controlPlay" v-else :src="require('~/img/play/play_2.png')" alt="pause">
  </div>
</div>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  name: 'VideoDuration',
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    totalTime: {
      type: Number,
      default: 1
    },
    isPlay: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    updateVideoPercent: function () {
      let elemet = document.querySelectorAll(".loading .stat-circle circle")
      let percent = Math.ceil(this.currentTime / this.totalTime * 100)
      let off = Math.ceil(-51 - ((51 / 100) * percent));
      new TweenMax.to(elemet, .3, {
        strokeDashoffset: off
      });
      return percent
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.VideoDuration {
  position: relative;
  cursor: pointer;
  @include clean-tap;
  .loading {
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
      width: 50%;
      height: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      height: 20px;

      &.controlPlay {
        transform: translate(-40%, -55%);
      }

      &.controlStop {
        transform: translate(-47%, -60%);
      }
    }

  }

}
</style>
