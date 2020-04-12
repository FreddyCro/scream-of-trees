<template>
  <div class="series-title">
    <h1>樹的無聲吶喊<span>—</span></h1>
    <h4>系列報導</h4>
  </div>
</template>

<script>
export default {
  name: 'SeriesTitle',
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.series-title {
  position: absolute;
  left: 35%;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 125px;
  transform: translateY(-150%);
  span {
    display: inline-block;
    line-height: 1;
    font-weight: 100;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    transform: scale(0.5, 10);
    transform-origin: 50% 0;
    @include pc {
      transform: scale(0.5, 15);
    }
  }
  h1 {
    font-family: source-han-serif-tc;
    line-height: 1;
    display: inline;
    writing-mode: vertical-rl;
    letter-spacing: 0.6rem;
  }
  h4 {
    font-family: source-han-serif-tc;
    line-height: 1.6;
    display: inline;
    writing-mode: vertical-rl;
    font-weight: normal;
    letter-spacing: 0.6rem;
    color: #9bd200;
  }
}
</style>