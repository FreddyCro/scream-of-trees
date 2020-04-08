<template>
  <div class="related-articles">
    <div v-if="this.$store.state.isMainPage" class="related-articles__main-title">
      系列報導
    </div>
    <Swiper ref="swiperRef" :options="swiperOption">
      <SwiperSlide
        v-for="(item, index) in articleList"
        :key="index"
      >
        <Link
          :data="item"
          :linkIndex="index"
          :currentIndex="activeIndex"
        />
      </SwiperSlide>
      <div
        v-if="deviceType !== 'pc'"
        class="swiper-pagination"
        slot="pagination"
      />
    </Swiper>
  </div>
</template>

<script>
import Link from '@/components/related/Link.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { autoResize_3 } from '@/mixins/masterBuilder.js';

export default {
  name: 'RelatedArticles',
  components: {
    Link,
    Swiper,
    SwiperSlide
  },
  mixins: [autoResize_3],
  data() {
    return {
      activeIndex: 0
    }
  },
  computed: {
    swiperOption() {
      const vm = this;
      return {
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: this.deviceType === 'pad',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          transitionStart() {
            vm.activeIndex = this.isEnd ? vm.articleList.length - 1 : this.activeIndex;
          },
        }
      }
    },
    articleList() {
      return this.$store.state.relatedArticles.filter(e => e.active);
    },
  },
}
</script>

<style lang="scss">
@import "~/style/_mixins.scss";
.related-articles {
  position: relative;
  margin: 120px 0;
  .related-articles__main-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    letter-spacing: 1rem;
    color: #f5f5f5;
    font-family: SourceHanSerifTC;
    margin-bottom: 24px;
  }
}
.swiper-wrapper {
  margin-left: 24px;
  @include pc {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.swiper-slide {
  width: 255px;
  @include smob {
    width: 240px;
  }
  @include pad {
    width: 405px;
  }
  @include pc {
    width: 200px;
  }
}
.swiper-pagination-bullet {
  opacity: 0.8;
  background-color: #9d9d9d;
}
.swiper-pagination-bullet-active {
  background-color: #ffffff;
}
</style>