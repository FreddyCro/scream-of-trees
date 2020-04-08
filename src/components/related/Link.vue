<template>
  <div class="link">
    <div class="link__image"></div>
    <div class="link__title"></div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.link {
  position: relative;
  width: 295px;
  height: 360px;
  background-color: blue;
  @include pad {
    width: 420px;
    height: 512px;
  }
}
</style>