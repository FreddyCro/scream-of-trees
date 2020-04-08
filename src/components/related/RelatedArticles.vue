<template>
  <div class="related-articles">
    <Title />
    <Slider />
  </div>
</template>

<script>
import Slider from '@/components/related/Slider.vue';
import Title from '@/components/related/Title.vue';

export default {
  name: 'RelatedArticles',
  components: {
    Slider,
    Title
  }
}
</script>

<style lang="scss" scoped>
.related-articles {
  
}
</style>