<template>
  <div
    :id="'slide-card-' + index"
    :class="{
      'slide-card': true,
      'slide-card--small': type === 'small',
      'slide-card--last': isLast,
      'slide-card--can-touch': canTouch,
    }"
  >
    <div
      v-if="!noText"
      :class="{
        'slide-card__content': true,
        'slide-card__content--small': type === 'small',
      }"
    >
      <div
        v-if="type === 'responsive'"
        :class="{'slide-card__gradient': true, 'slide-card__gradient--last': isLast}"
      />
      <div class="article">
        <slot name="article"></slot>
      </div>
      <slot name="full"></slot>
      <div v-if="isLast" class="article">
        <slot name="footer"></slot>
      </div>
    </div>
    <div v-else class="slide-card__content-no-text" />
  </div>
</template>

<script>
import { sendGaMethods } from "@/mixins/masterBuilder.js";

export default {
  name: 'SlideCard',
  mixins: [sendGaMethods],
  props: {
    /**
     * type:
     *  a: responsive
     *  b: small
     */
    type: {
      type: String,
      default: 'responsive'
    },
    isLast: {
      type: Boolean,
      default: false
    },
    index: {
      type: String,
      required: true
    },
    noText: {
      type: Boolean,
      default: false,
    },
    canTouch: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      ticking: false
    };
  },
  methods: {
    handleSlideEvent() {
      const pos = document
        .getElementById(`slide-card-${this.index}`)
        .getBoundingClientRect();
      
      if (pos.top < window.innerHeight * 0.2 && pos.bottom >= window.innerHeight * 0.2) {
        this.$store.dispatch('updateCurrentSlide', +this.index);
        this.$store.dispatch('updateCurrentSlidePlayStatus', +this.index);
      }
    },
    handleScroll() {
      if (!this.ticking) {
        if (this.$store.state.currentSlide === +this.index) return;
        window.requestAnimationFrame(() => {
          this.handleSlideEvent();
          this.ticking = false;
        });
      }
      this.ticking = true;
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-card {
  position: relative;
  pointer-events: none;
  width: 100%;
  padding-top: 120vh;
  // border: solid 5px red;
  &.slide-card--last {
    padding-top: 125vh;
  }
  &.slide-card--small {
    height: 200vh;
    padding: 0;
    background-color: transparent;
  }
  &.slide-card--can-touch {
    pointer-events: auto;
  }
}
.slide-card__content {
  position: relative;
  z-index: 20;
  color: #f5f5f5;
  min-height: 85vh;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 120px;
  &.slide-card__content--small {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: transparent;
    transform: translate(0, -50%);
    .article {
      display: inline-block;
      width: auto;
      max-width: 90%;
      padding: 24px 32px;
      background-color: rgba($color: #000000, $alpha: 0.78);
    }
  }
  .article {
    padding-right: 28px;
    background-color: transparent;
    @include pc {
      padding: 0;
    }
    .slide-card-article {
      width: 100%;
      overflow: hidden;
    }
    p {
      &:last-child {
        margin: 0;
      }
    }
  }
  .slide-card__gradient {
    position: absolute;
    left: 0;
    top: -25%;
    width: 100%;
    height: 150%;
    background-image: linear-gradient(to top, rgba($color: #000000, $alpha: 0), rgba($color: #000000, $alpha: 0.68), rgba($color: #000000, $alpha: 0.78), rgba($color: #000000, $alpha: 0.68),  rgba($color: #000000, $alpha: 0));
    &.slide-card__gradient--last {
      top: auto;
      bottom: 0;
      background-image: linear-gradient(to top, rgba($color: #000000, $alpha: 0.78), rgba($color: #000000, $alpha: 0.68), rgba($color: #000000, $alpha: 0));
    }
  }
}
.slide-card__content-no-text {
  position: relative;
  height: 50vh;
}
</style>