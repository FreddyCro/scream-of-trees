<template>
  <div id="app">
    <HeaderTypeA type="light">
      <a
        v-for="(item, index) in articleList"
        :key="index"
        :href="item.outlink ? item.url : mainPage + item.url"
        target="_blank"
        rel="noopener"
        aria-label="share-fb"
        title="share-fb"
        :class="{ active: item.menu.self }"
        @click="sendGA({
          category: 'menu',
          action: 'click',
          label: item.title
        })"
      >
        {{item.title}}
      </a>
    </HeaderTypeA>
    <SideProgress />
    <SlideBg />
    <ImageGallery />
    <SlideCard
      index="1"
      type="small"
    >
      <p class="p--first" slot="article">為什麼森林的樹高大挺拔<br>我們種的樹卻歪七扭八？</p>
    </SlideCard>
    <SlideCard
      index="2"
      type="small"
    >
      <p slot="article">我們拚命種樹<br>卻種出許多處境悲慘的樹</p>
    </SlideCard>
    <SlideCard
      index="3"
      type="small"
    >
      <p slot="article">斷頭樹、殘障樹、尿布樹...</p>
    </SlideCard>
    <SlideCard
      index="4"
      type="small"
    >
      <p slot="article">在這些樹身上<br>看不到樹該有的樣貌</p>
    </SlideCard>
    <SlideCard
      index="5"
      type="small"
    >
      <p slot="article">卻看到他們用殘破的身軀<br>訴說一個又一個令人痛心的遭遇</p>
    </SlideCard>
    <SlideCard
      index="6"
      type="responsive"
      :isLast=true
    >
      <div slot="article">
        <SeriesTitle />
        <p>2015年，新北市興南國小不當移植6株木麻黃，導致老樹枯死。<br>2018年，台南市五妃廟前一顆鳳凰木感染褐根病倒塌，砸中一名老翁。<br>2019年，彰化縣員林百果山廣天宮廟埕一株老榕樹染病傾倒，彰化縣又少了一株百年老樹。<br>2020年，高雄市中崙國中校內近百棵樹遭砍，只因校長認為「落葉太多掃不完」。</p>
        <p>一筆筆資料，記錄了周遭的樹常見的命運—遭到斷頭式砍伐、染病傾倒，或因不當移植、欠缺養護而枯死。</p>
        <p>每年植樹節，都可見到多位大官帶頭種樹，「種樹救地球」儼然成為全民運動，但相關機構及民眾常缺乏種樹觀念，導致種下去的樹缺乏管理維護，若仔細觀察我們周圍的樹，會發現許多樹的處境令人心寒。</p>
        <p>那些被大官們風光種下的大官樹，後來怎麼了？如何避免不健康的行道樹成為馬路上的殺人兇器？《聯合報》採訪團隊走訪各縣市種樹現場，記錄了不同棵樹的幸與不幸，期許台灣社會不僅要會種樹，更要懂得「把樹種好」。</p>
        <p><br></p>
        <p><br></p>
      </div>
      <RelatedArticles slot="full" />
      <div slot="footer">
        <FooterEditor>
          <div>
            <p>採訪</p>
            <p>鄭朝陽、郭琇真、<br>洪敬浤、王昭月、<br>翁禎霞、蔡容喬、<br>余采瀅、陳雅玲</p>
          </div>
          <div>
            <p>統籌製作</p>
            <p>謝汶均</p>
          </div>
          <div>
            <p>影像</p>
            <p>許正宏、陳正興、<br>林澔一、劉學聖、<br>聯合報系願景工作室、<br>聯合報系資料庫、<br>廖偉健攀樹師、<br>慈心有機農業發展基金會</p>
          </div>
          <div>
            <p>設計</p>
            <p>許瑋琳</p>
          </div>
          <div>
            <p>網頁製作</p>
            <p>楊若榆</p>
          </div>
          <div>
            <p>製作單位</p>
            <p>聯合報新媒體中心、<br>視覺設計中心、<br>數據中心</p>
          </div>
          <div>
            <p>監製</p>
            <p>聯合報新聞部<br>聯合報系願景工作室</p>
          </div>
          <div>
            <p></p>
            <p>2019.04.22</p>
          </div>
        </FooterEditor>
        <FooterShare />
        <FooterQuestionnaire />
      </div>
    </SlideCard>
    <PageFooter>
      <FooterFbComment />
      <FooterLogo useVision="yes" />
    </PageFooter>
  </div>
</template>

<script>
import { sendGaMethods } from '@/mixins/masterBuilder.js';

import ImageGallery from '@/components/ImageGallery.vue';
import FooterEditor from '@/components/footer/FooterEditor.vue';
import FooterFbComment from '@/components/footer/FooterFbComment.vue';
import FooterLogo from '@/components/footer/FooterLogo.vue';
import FooterQuestionnaire from '@/components/footer/FooterQuestionnaire.vue';
import FooterShare from '@/components/footer/FooterShare.vue';
import HeaderTypeA from '@/components/header/HeaderTypeA.vue';
import PageFooter from '@/components/footer/PageFooter.vue';
import RelatedArticles from '@/components/related/RelatedArticles.vue';
import SeriesTitle from '@/components/SeriesTitle.vue';
import SideProgress from '@/components/SideProgress.vue';
import SlideBg from '@/components/slider/SlideBg.vue';
import SlideCard from '@/components/slider/SlideCard.vue';

export default {
  name: 'App',
  mixins: [sendGaMethods],
  components: {
    ImageGallery,
    FooterEditor,
    FooterFbComment,
    FooterLogo,
    FooterQuestionnaire,
    FooterShare,
    HeaderTypeA,
    PageFooter,
    RelatedArticles,
    SeriesTitle,
    SideProgress,
    SlideBg,
    SlideCard,
  },
  computed: {
    articleList() {
      return this.$store.state.relatedArticles.filter(e => e.menu.active);
    },
  },
  data() {
    return {
      mainPage: document.querySelector('meta[property="main-page"]').content,
    }
  },
}
</script>

<style lang="scss">
@import "~/style/_mixins.scss";
.series-title {
  transform: translateY(-150%) !important;
}
.p--first {
  font-size: 1.35rem;
  padding: 15px 15px;
  @include pc {
    font-size: 2.5rem;
  }
}
</style>
