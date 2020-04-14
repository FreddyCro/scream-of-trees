<template>
  <div class="slide-card-quote">
    <div class="slide-card-quot__text">
      <slot name="text"></slot>
    </div>
    <div class="slide-card-quot__name" :class="{'text-left': textLeft}">
      <slot name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideCardQuote',
  props: {
    textLeft: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.slide-card-quote {
  margin-bottom: 100px;
  @include pc {
    margin-bottom: 125px;
  }
  h3, p {
    font-family: source-han-serif-tc;
    margin: 0;
  }
}
.slide-card-quot__text {
  h3 {
    text-align: left;
    color: #ffffff;
    line-height: 1.57;
  }
}
.slide-card-quot__name {
  p {
    text-align: right;
    color: #9bd100;
  }
  &.text-left {
    p {
      text-align: left;
    }
  }
}
</style>