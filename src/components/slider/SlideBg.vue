<template>
  <div class="slide-bg">
    <h1>{{currentSlide}}</h1>
  </div>
</template>

<script>
export default {
  name: 'SlideBg',
  computed: {
    currentSlide() {
      return this.$store.state.currentSlide || 1;
    }
  },
}
</script>

<style lang="scss" scoped>
.slide-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
}
</style>