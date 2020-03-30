<template>
  <div class="body-movin-container" />
</template>

<script>
import * as bodymovin from 'lottie-web';

export default {
  name: 'BodyMovin',
  props: {
    name: {
      tpye: String,
    },
    src: {
      tpye: String,
    },
    loop: {
      tpye: Boolean,
    },
    autoplay: {
      tpye: Boolean,
    }
  },
  mounted() {
    const bm = bodymovin.loadAnimation({
      container: this.$el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.src,
      name: this.name
    });
  },
}
</script>

<style lang="scss" scoped>
.body-movin-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
}
</style>