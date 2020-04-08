<template>
  <Swiper ref="mySwiper" :options="swiperOption">
    <SwiperSlide v-for="(item, index) in $store.state.relatedArticles" :key="index">
      <h1>{{index}}</h1>
      <Link
      
      />
    </SwiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
  </Swiper>
</template>

<script>
import Link from '@/components/related/Link.vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Link,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 300,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>