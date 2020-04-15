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
          first="來不及"
          second="長大的樹"
        />

        <p><span class="green-text green-text-large">10-20萬</span>政府每年植樹節送出的樹苗數量。<br><span class="green-text green-text-large">0%-90%</span>文武百官手植的「大官樹」歷年存活率。</p>
        <p>歷年來，政府累計已送出數千萬株樹苗給民眾響應種樹，但經內政部統計，6都的綠覆率離法定目標依然遙遠。</p>
        <p>政府送出的樹都種去哪了？為什麼歷屆大官樹存活率差這麼多？又是什麼原因，讓我們種下的樹，常常來不及長大？</p>
      </div>
    </SlideCard>
    <SlideCard
      index="2"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="不再風光的"
          second="大官樹"
        />
        <p>走進台北市的國家文官學院，大草坪邊上有5棵蘭嶼羅漢松，正對學院大門的那棵是前總統馬英九在2009年手植，長得相對高一些，其他4棵由中央要員種的就明顯矮了些。</p>
        <p>管理人員說，羅漢松原有20棵，經颱風吹折和不明原因枯死，如今只剩「5兄弟」；另有3棵五葉松也死掉一棵，其中一棵已長不出葉子，樹形乾瘦憔悴，養護的園藝廠商定期施肥仍毫無起色，也找不出病因。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/no-chance-to-grow/slide_2/c_mob.jpg')"
          :srcPad="require('~/img/no-chance-to-grow/slide_2/c_pad.jpg')"
          :srcPc="require('~/img/no-chance-to-grow/slide_2/c_pc.jpg')"
          alt='文官學院的五葉松健康狀況有極大落差，左圖為健康的五葉松，右圖為虛弱的五葉松。圖／記者鄭朝陽'
        >
          文官學院的五葉松健康狀況有極大落差，左圖為健康的五葉松，右圖為虛弱的五葉松。圖／記者鄭朝陽
        </ArticleColumnOne>
        <p>林務局負責中樞種樹活動，統計這些「大官樹」的後勢好壞兩極，存活率從9成到全軍覆沒都有，年代久遠的則已不可考。</p>
        <p>例如近10年內的大官樹，受護民間樹意識高張影響，存活率有7到9成；早期如2007年在北藝大校園種的1.7公頃、2006年台大校園0.1公頃苗木，均已全數死亡。另如陸軍北區聯合考測中心的3.2公頃福木、相思樹等苗木，也死掉一半，原因都是「欠缺管理維護」。</p>
        <p>樹藝師陳鴻楷感慨，大官在媒體面前都很認真種樹，但過完植樹節就不聞問，樹成了政治人物的作秀工具。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="3"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="被棄養的"
          second="庶民樹"
        />
        <SlideCardQuote>
          <h3 slot="text">「政府每年送不少樹苗給民眾響應種樹，隨便算都有上千萬棵，但這些樹都種哪裡去了？如果都長大了，台灣會是今天這樣嗎？」</h3>
          <p slot="name">─都市林協會理事長李有田</p>
        </SlideCardQuote>
        <p>李有田說，很多民眾不懂正確種樹，政府「送後不理」、民眾「只種不養」，結果就是政府年年發樹苗，卻任其自生自滅，形同棄養；沒有積極的樹木復育政策，如何強化國土保安、美化都市景觀？遑論一些為了開發基地、砍大樹種小樹的開倒車行為。</p>
        <p>曾主辦植樹活動的林業試驗所官員回憶，有次植樹節贈苗活動，民眾大排長龍領到樹苗，但活動結束、人群剛散場，垃圾桶裡卻塞滿這些小樹苗，民眾告訴他「家裡沒地方可種」。此後他深受打擊，林試所也因此停辦植樹活動，直到這兩年民間愛樹團體合作推廣「做個負責任的種樹人」，才又恢復。</p>
        <p>林務局長林華慶說，台灣都會區種樹綠化還有很大的進步空間，林務局這幾年辦植樹活動也推廣「負責任種樹」，各地林管處提供免費植樹諮詢，仍盼全民響應種樹。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="4"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="我們的樹"
          second="悲慘的活著"
        />
        <SlideCardQuote>
          <h3 slot="text">「如果把小狗、小貓養在過小的籠子裡，我們會不忍心，為什麼我們卻常把樹種在過小的空間裡呢？」</h3>
          <p slot="name">─台大森林環境暨資源學系<br>副教授邱祈榮</p>
        </SlideCardQuote>
        <p>邱祈榮表示，選對樹種、種對地點、好的栽種方式、後續養護完善‧‧‧要把樹種好，每一個環節都不能少，但在台灣，民眾常給樹過小的生長空間，或把樹種在不適合的環境中，導致許多樹木不是壽命短促，就是僅能苟延殘喘的活著。</p>
        <p>《聯合報》整理常見的錯誤種樹方式，希望在未來，更多的樹都能健健康康長大。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="5"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="斷頭樹"
        />
        <p>行道樹常面臨「過度修剪」問題，工人一刀、一刀砍下去，原本綠蔭盎然的樹，立刻變成光禿禿的「斷頭樹」，不僅影響市容，更埋下樹木往後倒塌的隱憂。</p>
        <p>被斷頭的樹會長出許多不定芽，並在日後長成不定枝，這些不定枝僅連接在樹幹外層，結構不穩，若強風來襲，容易折斷，危及路人安全。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/no-chance-to-grow/slide_5/chart_mob.svg')"
          :srcPad="require('~/img/no-chance-to-grow/slide_5/chart_pc.svg')"
          :srcPc="require('~/img/no-chance-to-grow/slide_5/chart_pc.svg')"
        />
      </div>
    </SlideCard>
    <SlideCard
      index="6"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="殘障樹"
        />
        <p>一棵樹、加上3個支撐架─這是行道樹常見的景象，但這常見的街景背後，卻隱藏著「殘障樹」問題。</p>
        <p>邱祈榮指出，民眾在選擇樹種時，普遍會選擇種「大苗」，這樣種起來比較有派頭，不過若缺乏相應的種植知識，沒有為大苗換較大的苗盆，會使樹苗的根系不健全，原本應昂然挺立的大樹也變成需靠支撐架支撐的殘障樹。</p>
        <p>為避免新植、剛移植的樹在成長時被強風吹倒，有些廠商會先用支撐架支撐樹木。一般樹木的支撐架應在一年後拆除，但許多相關單位將樹種下去後，遲遲未拆除支撐架，導致樹木無法發展建全根系，僅能仰賴支撐架。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="7"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="尿布樹"
        />
        <p>除了樹的「上半身」的問題外，許多樹的悲慘命運，則是發生在地表之下，而「尿布樹」是樹的下半身常見的災難。</p>
        <p>都市林協會指出，許多廠商在栽種樹苗前，未將苗木根部土球的塑膠繩及塑膠網移除，這些根部一直包覆著「尿布」的樹木無法扎根，一經強風吹襲，樹木容易倒伏，亦成為馬路上的隱形殺手。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/no-chance-to-grow/slide_7/c_mob.jpg')"
          :srcPad="require('~/img/no-chance-to-grow/slide_7/c_pad.jpg')"
          :srcPc="require('~/img/no-chance-to-grow/slide_7/c_pc.jpg')"
          alt="許多廠商移植樹木時，未將包覆根部的塑膠網移除，導致樹根難以往下生長。圖／報系資料照"
        >
          許多廠商移植樹木時，未將包覆根部的塑膠網移除，導致樹根難以往下生長。圖／報系資料照
        </ArticleColumnOne>
      </div>
    </SlideCard>
    <SlideCard
      index="8"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="窒息樹"
        />
        <p>廠商為了美觀，常會在樹穴中種植灌木或複層植栽，但種植灌木時，至少會在樹穴中再覆蓋15至20公分的沃土，多覆蓋的土壤常蓋過樹幹和樹根交接的根領處，導致樹木窒息、死亡。</p>
        <p>此外，灌木的根系也會與樹木的根系競爭水分、養分，導致樹勢衰弱。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/no-chance-to-grow/slide_8/chart_mob.svg')"
          :srcPad="require('~/img/no-chance-to-grow/slide_8/chart_pc.svg')"
          :srcPc="require('~/img/no-chance-to-grow/slide_8/chart_pc.svg')"
        />
      </div>
    </SlideCard>
    <SlideCard
      index="9"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="守護樹木"
          second="你可以這麼做"
        />
        <p>若看到樹木遭受不當對待，可以怎麼做呢？《聯合報》整理了樹木通報、救援專線及關心樹木的民間組織資訊，邀請你一同加入守護樹木行列：</p>
        <p><span class="green-text">公家單位</span><br>若發現危木，或有路樹相關問題，可至各縣市1999市民服務平台，選擇「路樹」項目，通報相關案例。</p>
        <p><span class="green-text">民間單位</span><br><a href="http://oldtree119.org/" target="_blank" class="green-underline">台灣老樹救援協會：</a>協助台灣各地老樹進行救援、養護等保育工作，若遇到老樹遭受不當對待，可至協會網頁填寫<a href="http://oldtree119.org/reciprocation.html" target="_blank" class="green-underline">公益老樹救援相關表單</a></p>
        <p><a href="http://www.twas.org.tw/index.php" target="_blank" class="green-underline">台灣都市林健康美化協會：</a>致力強化都市內公有及私有樹木之管理，以發揮都市林的環境效益。</p>
        <p><a href="https://www.dodolovetree.org.tw/Client/P01.aspx?MenuItem=I1511618202451000000" target="_blank" class="green-underline">台灣護樹協會：</a>致力守護台灣各地的樹木，審視公部門對待樹木的態度。</p>
        <p><a href="https://www.facebook.com/twlovetree/" target="_blank" class="green-underline">高雄。愛樹人：</a>關注高雄樹木的護樹團體。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="10"
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
import SlideCardQuote from '@/components/slider/SlideCardQuote.vue';
import SlideCardTitle from '@/components/slider/SlideCardTitle.vue';

export default {
  name: 'App',
  mixins: [sendGaMethods],
  components: {
    ArticleColumnOne,
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
    SlideCardQuote,
    SlideCardTitle,
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

<style lang="scss" scoped>
@import '~/style/trees.scss';
</style>
