<template>
  <div class="image-gallery">
    <h3>{{currentSlide}}</h3>
  </div>
</template>

<script>
export default {
  name: 'ImageGallery',
  computed: {
    currentSlide() {
      return this.$store.state.currentSlide || 1;
    }
  },
  watch: {
    currentSlide: {
      handler(value) {
        if (value === 3) this.handleGalleryScale(1);
        if (value === 4) this.handleGalleryScale(2);
        if (value === 5) this.handleGalleryScale(3);
      },
    },
  },
  methods: {
    handleGalleryScale: function(ratio) {
      // console.log('scale:' + ratio);
      function get() {
        return 'get'
      }
      return { get }
    }
  },
  mounted() {
    // console.log(this.handleGalleryScale().get());
  }
}
</script>

<style lang="scss" scoped>
.image-gallery {
  position: fixed;
  width: 100%;
  height: 100vh;
}
</style>