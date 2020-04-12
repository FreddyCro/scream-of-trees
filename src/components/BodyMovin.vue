<template>
  <div :id="'body-movin-' + name" class="body-movin-container" />
</template>

<script>
import * as bodymovin from "lottie-web";

export default {
  name: "BodyMovin",
  props: {
    name: {
      tpye: String,
      required: true,
    },
    src: {
      tpye: String,
      required: true,
    },
    loop: {
      tpye: Boolean,
      default: false,
    },
    autoplay: {
      tpye: Boolean,
      default: true,
    },
    acitve: {
      tpye: Boolean,
      default: false,
    },
    offset: {
      tpye: Number,
      default: 2000,
    },
    index: {
      tpye: Number,
      default: 0,
    }
  },
  data() {
    return {
      bm: null,
    }
  },
  watch: {
    acitve: {
      handler(value) {
        if (value) {
          this.bm.goToAndStop(0);
          setTimeout(() => {
            this.bm.goToAndPlay(0);
          }, this.offset * this.index);
        }
      }
    }
  },
  mounted() {
    this.bm = bodymovin.loadAnimation({
      container: document.getElementById(`body-movin-${this.name}`),
      renderer: "svg",
      loop: this.loop,
      autoplay: false,
      path: this.src,
      name: this.name
    });
  }
};
</script>

<style lang="scss" scoped>
.body-movin-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>