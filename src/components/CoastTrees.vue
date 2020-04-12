<template>
  <div id="coast-trees" class="coast-trees">
    <div class="coast-trees__map">
      <div class="coast-trees__body-movin-container">
        <BodyMovin
          name="trees2015"
          src="./how-many-trees/trees/2015/data.json"
          :loop="false"
          autoplay
          :offset="offsetList[0]"
          :acitve="isEnter"
        />
        <BodyMovin
          name="trees2017"
          src="./how-many-trees/trees/2017/data.json"
          :loop="false"
          autoplay
          :offset="offsetList[1]"
          :acitve="isEnter"
        />
        <BodyMovin
          name="trees2019"
          src="./how-many-trees/trees/2019/data.json"
          :loop="false"
          autoplay
          :offset="offsetList[2]"
          :acitve="isEnter"
        />
      </div>
      <div class="coast-trees__tw-bg">
        <img :src="require('~/img/how-many-trees/slide_10/taiwan.svg')" alt="taiwan">
      </div>
    </div>
    <div class="coast-trees__info">
      <div class="coast-trees__info__year"><span class="coast-trees__info__year__digit">2019</span>年</div>
      <div class="coast-trees__info__trees"><span class="coast-trees__info__trees__digit">109850</span>棵樹</div>
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
      yearList: [
        { year: 2015, trees: 7000 },
        { year: 2017, trees: 100931 },
        { year: 2019, trees: 109850 },
      ],
      /*
        樹的秒數
        2015年 : 01:09 秒
        2017年 : 00:24 秒
        2019年 : 02:14 秒
       */
      offsetList: [0, 1.09, 1.33],
    };
  },
  watch: {
    isEnter: {
      handler(value) {
        // TODO: play infos
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
    top: 0;
    left: 0;
    .coast-trees__info__year {
      .coast-trees__info__year__digit {
        font-size: 22px;
        @include pc {
          font-size: 30px;
        }
      }
    }
    .coast-trees__info__trees {
      color: #9bd200;
      .coast-trees__info__trees__digit {
        font-size: 32px;
        @include pc {
          font-size: 50px;
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
    bottom: -50px;
    p {
      color: #7b7a7a;
    }
  }
}
</style>