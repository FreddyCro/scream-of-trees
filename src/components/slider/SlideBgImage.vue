<template>
  <img
    :class="{
      'slide-bg-image': true,
      'slide-bg-image--zoom': isAtThisImage,
    }"
    :src="imageSrc"
    :alt="title"
  >
</template>

<script>
export default {
  name: 'SlideBgImage',
  props: {
    imageSrc: {
      type: String,
      default: null,
    },
    trigger: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isAtThisImage() {
      return this.$store.state.currentSlide === this.trigger;
    },
  },
  data() {
    return {
      title: document.querySelector('title').innerHTML,
    }
  },
}
</script>

<style lang="scss" scoped>
.slide-bg-image {
  min-width: 100%;
  min-height: 100%;
  transition: 2s ease-out;
  &.slide-bg-image--zoom {
    transform: scale(1.05);
  }
}
</style>