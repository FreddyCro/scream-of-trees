<template>
  <div id="coast-trees" class="coast-trees">
    <div class="coast-trees__map">
      <div class="coast-trees__body-movin-container">
        <BodyMovin
          name="trees2015"
          :src="rootUrl + 'how-many-trees/trees/2015/data.json'"
          :loop="false"
          autoplay
          :index="0"
          :offset="delayOffset"
          :acitve="isEnter"
        />
        <BodyMovin
          name="trees2017"
          :src="rootUrl + 'how-many-trees/trees/2017/data.json'"
          :loop="false"
          autoplay
          :index="1"
          :offset="delayOffset"
          :acitve="isEnter"
        />
        <BodyMovin
          name="trees2019"
          :src="rootUrl + 'how-many-trees/trees/2019/data.json'"
          :loop="false"
          autoplay
          :index="2"
          :offset="delayOffset"
          :acitve="isEnter"
        />
      </div>
      <div class="coast-trees__tw-bg">
        <img :src="require('~/img/how-many-trees/slide_10/taiwan.svg')" alt="taiwan">
      </div>
    </div>
    <div class="coast-trees__info">
      <div
        v-for="(item, index) in yearList"
        :key="index"
        :class="{
          'coast-trees__info__item': true,
          'coast-trees__info__item--active': currentIndex === index
        }" 
        :style="{
          transform: coastTreesInfoTranslate,
        }"
      >
        <div class="coast-trees__info__item__year">
          <span class="coast-trees__info__item__year__digit">{{item.year}}</span>年
        </div>
        <div class="coast-trees__info__item__trees">
          <span class="coast-trees__info__item__trees__digit">{{item.trees}}</span>棵樹
        </div>
      </div>
    </div>
    <div class="coast-trees__source"><p class="small">資料來源：慈心有機農業發展基金會提供</p></div>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce';
import BodyMovin from '@/components/BodyMovin';
export default {
  name: 'CoastTrees',
  components: {
    BodyMovin,
  },
  data() {
    return {
      ticking: false,
      isEnter: false,
      rootUrl: document.querySelector('meta[property="main-page"]').content,
      currentIndex: 0,
      yearList: [
        { year: 2015, trees: 7000 },
        { year: 2017, trees: 100931 },
        { year: 2019, trees: 109850 },
      ],
      delayOffset: 2000,
      interval: null,
      /*
        樹的秒數
        2015年 : 01:09 秒
        2017年 : 00:24 秒
        2019年 : 02:14 秒
       */
      // offsetList: [0, 1.09, 1.33],
    };
  },
  computed: {
    coastTreesInfoTranslate() {
      return 'translateX(' + this.currentIndex * (-100) + '%)';
    }
  },
  watch: {
    isEnter: {
      handler(value) {
        if (value) this.handleEnterTrees();
        else this.handleLeaveTrees();
      }
    }
  },
  methods: {
    handleSlideEvent() {
      const coastTrees = document.getElementById('coast-trees');
      const pos = coastTrees.getBoundingClientRect();
      const checkInto = pos.top < pos.height && pos.bottom > 0;
      if (checkInto) {
        if (!this.isEnter) {
          this.isEnter = true;
        }
      } else {
        if (this.isEnter) {          
          this.isEnter = false;
        }
      }
    },
    handleScroll: _debounce(function() {
      if (!this.ticking) {
        if (this.$store.state.currentSlide === +this.index) return;
        window.requestAnimationFrame(() => {
          this.handleSlideEvent();
          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 30),
    handleEnterTrees() {
      this.interval = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex >= 2) clearInterval(this.interval);
      }, this.delayOffset);
    },
    handleLeaveTrees() {
      this.currentIndex = 0;
      clearInterval(this.interval);
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll, true);
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }
}
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";
.coast-trees {
  position: relative;
  width: 100%;
  padding-top: 138.9%;
  .coast-trees__info {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @include pc {
      width: 225px;
    }
    .coast-trees__info__item {
      flex-shrink: 0;
      width: 150px;
      opacity: 0;
      transition: 0.666s ease-in-out;
      @include pc {
        width: 225px;
      }
      &.coast-trees__info__item--active {
        opacity: 1;
      }
      .coast-trees__info__item__year {
        .coast-trees__info__item__year__digit {
          font-size: 22px;
          @include pc {
            font-size: 30px;
          }
        }
      }
      .coast-trees__info__item__trees {
        color: #9bd200;
        .coast-trees__info__item__trees__digit {
          font-size: 32px;
          @include pc {
            font-size: 50px;
          }
        }
      }
    }
  }
  .coast-trees__map {
    position: absolute;
    top: 0;
    left: 10%;
    width: 100%;    
    height: 100%;
    .coast-trees__tw-bg, .coast-trees__body-movin-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .coast-trees__tw-bg {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 90%;
      }
    }
  }
  .coast-trees__source {
    position: absolute;
    left: 0;
    bottom: -25px;
    p {
      color: #7b7a7a;
      margin-bottom: 0;
    }
  }
}
</style>