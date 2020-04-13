<template>
  <div :class="{ 'link': true, 'link--active': isActive }">
    <a
      :class="{
        'link__body': true,
        'link__body--active': isActive,
      }"
      :href="shareUrl"
      target="_blank"
      rel="noopener"
      :ariaLabel="data.title"
      :title="data.title"
      @click="sendGA({
        category: 'related',
        action: 'click',
        label: data.title
      })"
    >
      <div class="link__body__image">
        <img :src="imgPath" :alt="data.title" />
      </div>
      <div class="link__body__title">
        <p>{{data.title}}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { autoResize_3, sendGaMethods } from '@/mixins/masterBuilder.js';

export default {
  name: 'Link',
  mixins: [autoResize_3, sendGaMethods],
  props: {
    data: {
      type: Object,
      required: true
    },
    linkIndex: {
      type: Number,
      required: true
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    shareUrl() {
      if (this.data.outlink) return this.data.url;
      return `${document.querySelector('meta[property="main-page"]').content}${this.data.url}`;
    },
    imgPath() {
      return require(`~/img/related/${this.data.imgSrc}.png`);
    },
    isActive() {
      return this.deviceType === 'pc' || this.linkIndex === this.currentIndex;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.link {
  position: relative;
  height: 424px;
  padding-bottom: 64px;
  opacity: 0.3;
  transition: .333s ease-out;
  transform-origin: 50% 0;
  @include pad {
    height: 576px;
  }
  @include pc {
    height: 310px;
    &:hover {
      transform: scale(1.05);
    }
  }
  &.link--active {
    opacity: 1;
  }
  .link__body {
    width: 100%;
    height: 100%;
    color: #f5f5f5;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    @include clean-tap;
    .link__body__image {
      position: relative;
      overflow: hidden;
      height: calc(100% - 20px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      @include pad {
        justify-content: flex-start;
      }
      @include pc {
        justify-content: flex-start;
      }
      
      img {
        height: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>