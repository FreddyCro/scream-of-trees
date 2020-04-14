<template>
  <div id="app">
    <HeaderTypeA type="light">
      <a
        v-for="(item, index) in articleList"
        :key="index"
        :href="mainPage + item.url"
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
    <SlideCard
      index="1"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          :isMain="true"
          first="台灣還要"
          second="種多少樹才夠？"
        />
        <p><span class="green-text green-text-large">20-40%</span>國際主要城市綠覆率</p>
        <p><span class="green-text green-text-large">不到5%</span>台北市、新北市、桃園市、台中市、台南市的綠覆率</p>
        <p>種樹是減碳、改善地球暖化與熱島效應最簡單的方法，許多國家和城市展現企圖心推動植樹抗暖的氣候行動。</p>
        <p>城市綠化無所不用其極的新加坡，目前綠覆率約30%，目標也提高到40%。義大利米蘭未來12年內要種300萬棵樹。</p>
        <p>反觀台灣，六都的綠覆率低得可憐，五個都低於5%，綠覆率最高的高雄市也低於法令規定的10%。</p>
        <p>台灣都會區有多少樹？我們到底還要種多少樹才夠？</p>
        <p><br></p>
        <h4>六都綠覆率</h4>
        <ArticleColumnOne
          :srcMob="require('~/img/how-many-trees/slide_1/chart_mob.svg')"
          :srcPad="require('~/img/how-many-trees/slide_1/chart_pc.svg')"
          :srcPc="require('~/img/how-many-trees/slide_1/chart_pc.svg')"
          alt='註：「綠地」含公園、綠地、廣場、兒童遊樂場及體育場所5大設施，實際綠地低於上述比率'
        >
          資料來源／107年營建統計年報   製表／鄭朝陽
        </ArticleColumnOne>
      </div>
    </SlideCard>
    <SlideCard
      index="2"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="國外拚命種樹"
          second="台灣還在與樹爭地"
        />
        <p>國際主要城市明白種樹的重要性，都追求「把樹種好」，讓樹木像一把超級大傘為城市遮陽、引風，為夏季發燒的城市降溫。</p>
        <p>我們台灣呢？都市計畫法數十年來死守10%天花板，完全無視國際趨勢，裡頭還要扣除兒童遊戲場、體育場館等非綠化設施，真正的綠地實在少得可憐。</p>
        <p>以台北市為例，內政部統計北市綠地面積占比為4.8%，但環境品質文教基金會董事長謝英士扣除山坡地後，相對人口稠密的市區約有10萬棵樹。平均一棵喬木的樹蔭面積為16平方公尺，市區被樹冠覆蓋的面積約1.6平方公里，只占市區的1.3%，<span class="text-bold">若要達到國際建議的兩成綠覆率，北市須再種150萬棵樹才行</span>。</p>
        <p>台灣種樹30年計畫聯盟發言人劉柏宏說，政府要重新定義「綠覆率」，不能再摻雜兒童遊戲場等設施含糊打混，應改為「樹冠覆蓋面積」，能以衛星或航照影像具體量測，才能督促政府重視植樹綠化政策。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="3"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="種樹救海岸線"
        />
        <p>全台各地的海岸線逐漸退縮，我們的國土，正被大海一點一滴吞沒。</p>
        <p>為防止海岸線後退，政府及民間組織正積極在海岸種下一排排綠樹，要靠這些海岸林抓牢土地、抵禦風沙，緊守台灣海岸線。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="4"
      type="responsive"
    >
      <div slot="article">
        <p>據中央地質調查所調查，1978年到2009年間，全台多處海岸退縮100到650公尺。</p>
        <p>台灣本島的人工海岸線比例高達56.29%，海岸土地過度開發、海岸線嚴重人工化、海平面上升均是衝擊台灣海岸線的因素。海岸線退縮不僅危害國土保安，也威脅民眾生命財產安全。</p>
        <p><br></p>
        <h4>台灣海岸線退縮情形</h4>
        <CoastMap />
      </div>
    </SlideCard>
    <SlideCard
      index="5"
      type="responsive"
    >
      <div slot="article">
        <p>這一天，用種樹守護台灣海岸線的慈心有機農業發展基金會，帶《聯合報》團隊走訪新北市萬里沿岸的下寮海灘。</p>
        <p>沙灘旁有間廟宇叫「聖安宮」，負責人許修逸說，30年來當地沙灘寬度少掉一半，約50公尺。</p>
        <p>為守住海岸線，慈心自3年前，開始在下寮海灘進行海岸造林。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="6"
      type="responsive"
    >
      <div slot="article">
        <p>夏天砂溫最高可達70度，慈心靠祕密武器「水寶盆」蓄水、供應樹苗水分。</p>
        <p>慈心有機農業發展基金會種樹專案總監程禮怡表示，在水寶盆的樹苗不會超過40度，可避免樹苗進入休眠期。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="7"
      type="responsive"
    >
      <div slot="article">
        <p>程禮怡說，下寮海灘海岸線退縮嚴重，若未以海岸造林作為第一道防線，每當遇到暴潮時，「海浪便會長驅直入，把陸地吃掉。」</p>
        <p>慈心在下寮海灘選用的林投、黃堇和草海桐，共通點是耐沙；其中林投跟黃堇還耐鹽，可承受海水的侵襲。</p>
        <p>如今，慈心種植的黃堇、草海桐已長得比人高，與一旁的林投交錯叢生，形成一道綿延快一公里的綠色堡壘。</p>
        <p>近5年來，慈心已在全台12縣市沿岸種下45萬棵樹。</p>
        <p>除了新北市萬里，也能在雲林縣台西鄉、嘉義縣布袋鎮等地見到他們的種樹成果。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="8"
      type="small"
    >
      <div slot="article">
        <p>2015年，慈心基金會在雲林縣台西鄉海岸造林前，當地佈滿光禿禿的沙地。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="9"
      type="small"
    >
      <div slot="article">
        <p>到了2017年，慈心已在當地種滿馬鞍藤、木麻黃等植物。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="10"
      type="responsive"
    >
      <div slot="article">
        <p>海岸造林就像在挑戰不可能任務。程禮怡表示，國家整體政策應該要有一套上位計劃，來保護這些防風林，避免當大型開發案等衝突引發時，土地遭到任意解編。不僅前功盡棄，國土保安的防線也失守了。</p>
        <p><br></p>
        <h4>慈心歷年海岸造林成果</h4>
        <CoastTrees />
      </div>
    </SlideCard>
    <SlideCard
      index="11"
      type="responsive"
      :isLast=true
    >
      <div slot="full">
        <SeriesTitle />
        <RelatedArticles />
      </div>
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

import ArticleColumnOne from '@/components/layout/ArticleColumnOne.vue';
import CoastMap from '@/components/CoastMap.vue';
import CoastTrees from '@/components/CoastTrees.vue';
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
import SlideCardTitle from '@/components/slider/SlideCardTitle.vue';

export default {
  name: 'App',
  mixins: [sendGaMethods],
  components: {
    ArticleColumnOne,
    CoastMap,
    CoastTrees,
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
    SlideCardTitle,
  },
  data() {
    return {
      mainPage: document.querySelector('meta[property="main-page"]').content,
    }
  },
  computed: {
    articleList() {
      return this.$store.state.relatedArticles.filter(e => e.menu.active);
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/style/trees.scss';
</style>