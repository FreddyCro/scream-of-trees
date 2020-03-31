<template>
  <div
    :id="'slide-card-' + index"
    :class="{
      'slide-card': true,
      'slide-card--small': type === 'b',
    }"
  >
    <div
      :class="{
        'slide-card__content': true,
        'slide-card__content--small': type === 'b',
        'article': type === 'a',
      }"
    >
      <slot />
    </div>
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
      default: 'a',
    },
    index: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      ticking: false,
    }
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        if (this.$store.state.currentSlide === +this.index) return;
        window.requestAnimationFrame(() => {
          const pos = document.getElementById('slide-card-' + this.index).getBoundingClientRect();

          if (pos.top < 0 && pos.bottom >= 0) {
            this.$store.dispatch('updateCurrentSlide', +this.index);
          }

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
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';
.slide-card {
  position: relative;
  width: 100%;
  &.slide-card--small {
    height: 100vh;
  }
}
.slide-card__content {
  width: 100%;
  color: #f5f5f5;
  &.slide-card__content--small {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 275px;
    background-color: #000000dd;
    transform: translate(-50%, -50%);
    @include pc {
      width: 320px;
    }
  }
}
</style>