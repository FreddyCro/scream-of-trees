<template>
  <div class="slide-card-title">
    <div v-if="isMain" class="slide-card-title__main">
      <h1>
        <span class="first">
          <span class="first__content">{{first}}</span>
          <span class="line" />
          <span class="arrow"><NmdArrow /></span>
        </span>
        <br>
        <span class="space">｜</span>
        <span class="second">{{second}}</span>
      </h1>
    </div>
    <div v-else class="slide-card-title__sub">
      <h2>
        <span class="first">
          <span class="first__content">{{first}}</span>
          <span class="line" />
        </span>
        <br>
        <span class="space">｜</span>
        <span class="second">{{second}}</span>
      </h2>
    </div>
  </div>
</template>

<script>
import NmdArrow from '@/components/pinhead/NmdArrow.vue';

export default {
  name: 'SlideCardTitle',
  components: {
    NmdArrow
  },
  props: {
    isMain: {
      type: Boolean,
      default: false,
    },
    first: {
      type: String,
      default: null,
    },
    second: {
      type: String,
      default: null,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/style/_mixins.scss';

.slide-card-title {
  position: absolute;
  left: 20%;
  top: 0;
  transform: translateY(-100%);
  @include pc {
    left: 0%;
    transform: translateY(-115%);
  }
  h1 {
    font-family: source-han-serif-tc;
    line-height: 0.8;
    display: inline;
    writing-mode: vertical-rl;
    letter-spacing: 1.5rem;
  }
  h2 {
    font-family: source-han-serif-tc;
    line-height: 0.8;
    display: inline;
    writing-mode: vertical-rl;
    letter-spacing: 1rem;
  }
  span {
    white-space: pre-wrap;
    &.space {
      visibility: hidden;
    }
    &.line {
      display: block;
      height: 100%;
      width: 1px;
      background-color: #f5f5f5;
    }
    &.arrow {
      display: block;
      transform: translateY(10px);
    }
    &.first {
      display: flex;
      align-items: center;
      height: 100%;
      .first__content {
        flex-shrink: 0;
        display: block;
      }
    }
    &.second {
      display: inline-block;
      min-height: 350px;
      @include pc {
        min-height: 450px;
      }
    }
  }
}
.slide-card-title__main, .slide-card-title__sub {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 100%;
}
.slide-card-title__main {
  margin-bottom: 350px;
  @include smob {
    margin-bottom: 270px;
  }
}
.slide-card-title__sub {
  margin-bottom: 20px;
  @include pc {
    margin-bottom: 0;
  }
}
</style>