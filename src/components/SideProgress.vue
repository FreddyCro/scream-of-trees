<template>
  <div class="side-progress">
    <div
      v-for="(item, index) in slideAmount"
      :key="index" class="side-progress__item"
    >
      <div
        class="side-progress__item__rect-wrapper"
        :style="{ transform: calcProgress(index) }"
      >
        <div class="side-progress__item__rect" />
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from 'lodash.debounce';

export default {
  name: "SideProgress",
  data() {
    return {
      ticking: false,
      timer: 1,
      progressList: { 0: 0.1 }
    };
  },
  computed: {
    slideAmount() {
      return this.$store.state.slideAmount;
    }
  },
  methods: {
    calcProgress(index) {
      const progress = this.progressList[index] || 100;
      return `translateY(${progress}%)`;
    },
    initProgressList() {
      const tempArray = [];
      for (let i = 0; i < this.slideAmount; i++) {
        tempArray[i] = i === 0 ? 0.1 : 100;
      }
      this.progressList = {...tempArray};
    },
    handleProgressUpdate(i, offset = 0) {
      const slide = document.getElementById(`slide-card-${i + 1}`);
      const pos = slide.getBoundingClientRect();
      if (pos.top > 0) this.progressList[i] = 100;
      else if (pos.bottom < offset) this.progressList[i] = 0.1;
      else this.progressList[i] = Math.min(pos.bottom / (slide.clientHeight - offset) * 100, 100);
    },
    handleListenProgress() {
      const counterFooterHeight = window.innerHeight - document.getElementById('footer').clientHeight;
      const offset = counterFooterHeight > 0 ? counterFooterHeight + 50 : 0
      for (let i = 1; i < this.slideAmount; i++) {
        if (i === 0) this.handleProgressUpdate(i);
        /*最後一頁要扣掉footer的高度 */
        if (i === this.slideAmount - 1) this.handleProgressUpdate(i, offset);
        else this.handleProgressUpdate(i);
      }
    },
    handleScroll: _debounce(function () {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.handleListenProgress();
          this.ticking = false;
        });
      }
      this.ticking = true;
    }, 30)
  },
  mounted() {
    this.initProgressList();
    document.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style lang="scss" scoped>
@import "~/style/_mixins.scss";

.side-progress {
  position: fixed;
  z-index: 5000;
  top: 15vh;
  right: 10px;
  @include pc {
    top: 100px;
  }
}
.side-progress__item {
  position: relative;
  width: 5px;
  height: 5px;
  margin-bottom: 5px;
}
.side-progress__item__rect-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 50vh;
  transition: .666s ease-in-out;
}
.side-progress__item__rect {
  position: relative;
  width: 100%;
  padding-top: 100%;
  background-color: #fff;
}
</style>