<template>
  <div class="header-top-gradient" />
</template>

<script>
export default {
  name: 'HeaderTopGradient'
}
</script>

<style lang="scss" scoped>
  .header-top-gradient {
    pointer-events: none;
    position: fixed;
    z-index: 3500;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background-image: linear-gradient(to bottom, #00000055, #00000000);
  }
</style>