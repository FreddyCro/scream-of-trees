<template>
  <div
    :id="'slide-card-' + index"
    :class="{
      'slide-card': true,
      'slide-card--small': type === 'small',
      'slide-card--last': isLast,
    }"
  >
    <!-- TODO: responsive gradient -->
    <div v-if="type === 'responsive'" class="slide-card__gradient slide-card__gradient--top" />
    <div
      :class="{
        'slide-card__content': true,
        'slide-card__content--small': type === 'small',
        'article': type === 'responsive',
      }"
    >
      <slot />
    </div>
    <!-- <div v-if="type === 'responsive'" class="slide-card__gradient slide-card__gradient--bottom" /> -->
  </div>
</template>

<script>
export default {
  name: 'SlideCard',
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
    }
  },
  data() {
    return {
      ticking: false
    };
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        if (this.$store.state.currentSlide === +this.index) return;
        window.requestAnimationFrame(() => {
          const pos = document
            .getElementById(`slide-card-${this.index}`)
            .getBoundingClientRect();

          if (pos.top < 0 && pos.bottom >= 0) {
            this.$store.dispatch('updateCurrentSlide', +this.index);
            this.$store.dispatch('updateCurrentSlidePlayStatus', +this.index);
          }

          this.ticking = false;
        });
      }
      this.ticking = true;
    }
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
  width: 100%;
  margin: 25vh 0;
  background-color: #000000;
  &.slide-card--last {
    margin-bottom: 0 !important;
  }
  &.slide-card--small {
    height: 100vh;
    margin: 0;
    background-color: transparent;
  }
}
.slide-card__content {
  width: 100%;
  color: #f5f5f5;
  padding-top: 120px;
  padding-bottom: 120px;
  &.slide-card__content--small {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 275px;
    padding: 0 0;
    background-color: #000000dd;
    transform: translate(-50%, -100%);
    @include pc {
      width: 320px;
    }
  }
  &.article {
    background-color: #000000;
  }
}
.slide-card__gradient {
  position: absolute;
  left: 0;
  width: 100%;
  height: 25vh;
  &.slide-card__gradient--top {
    top: 0;
    transform: translateY(-95%);
    background-image: linear-gradient(to top, #000000ff, #00000000);
  }
  &.slide-card__gradient--bottom {
    bottom: 0;
    transform: translateY(95%);
    background-image: linear-gradient(to bottom, #000000ff, #00000000);
  }
}
</style>