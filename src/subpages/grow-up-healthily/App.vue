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
          first="讓我們的樹"
          second="健康長大"
        />
        <p>為數龐大的行道樹是都會珍貴的綠資源，但中空、染病、隨時可能倒塌的行道樹，卻成為道路上的隱憂。</p>
        <p>政府該怎麼做，才能有效掌握每棵行道樹的健康狀況？若遇到瀕死的樹木，是該讓他好好走完最後一程，還是應不惜成本搶救？</p>
        <p>《聯合報》採訪樹專家，實際量測樹的健康狀況，也紀錄他們遇到危木時，選擇「救與不救」的掙扎。</p>
        <p>若要讓綠樹在全台開枝散葉，除了仰賴政府規劃更完善的種樹政策，民眾也得更積極投入種樹，《聯合報》採訪大力推動種樹的各界人士，期許在10年後的今天，台灣這塊土地能更綠一點、更美一點，我們的樹也能更健康一點。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="2"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="建立樹木"
          second="健康履歷"
        />
        <p>近年來，各縣市都在推動樹木QR code身分證，但農委會林業試驗所副所長吳孟鈴表示，更重要的是建立樹木健康履歷，才能促進行道樹健康。</p>
        <p>掃描行道樹的QR code後，會出現樹種、樹的特性等基本資料，這些資料，滿足了環境教育功能，卻無益於讓這棵樹更健康的活著。</p>
        <p>吳孟鈴指出，有樹木的基本資料，卻沒有進行樹木健檢，也沒有修剪、補植、土壤與環境監測等紀錄，更遑論病蟲害防治、樹醫師診斷等，多數行道樹種下去就不追蹤了，只有在颱風季前防災修剪，怎麼可能活得很健康？當務之急要建立「樹木健康履歷」。</p>
        <p>以行道樹常見的褐根病為例，吳孟鈴說，行道樹倒塌後，維護廠商會補植，如果感染褐根病，沒有清除殘根、覆土，等於把新樹種在疫區，補植再多次也長不好；如果有樹木的健康履歷，針對前次樹倒的原因對症下藥，再種下去的樹才會健康。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="3"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="醫樹的人"
          second="樹藝師謝翁維"
        />
        <p>打針、吊點滴、做外科手術的器材‧‧‧謝翁維把工作會用到的器具一字排開，仔細一看，左側竟還擺了一把開山刀，原來，行醫12年的謝翁維每天醫治的病患正是各式各樣的樹木。</p>
        <p>隨著「護樹」觀念興起，農委會林業試驗所於2012年成立「樹木醫學中心」，並引進國外的「樹藝師」制度，要用更專業的知識與技術養育樹木，如今，全台已有228位像謝翁維一樣的樹藝師。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/grow-up-healthily/slide_3/c_mob.jpg')"
          :srcPad="require('~/img/grow-up-healthily/slide_3/c_pad.jpg')"
          :srcPc="require('~/img/grow-up-healthily/slide_3/c_pc.jpg')"
          alt='樹藝師工作時會用到的各項器材。圖／記者林澔一'
        >
          樹藝師工作時會用到的各項器材。圖／記者林澔一
        </ArticleColumnOne>
      </div>
    </SlideCard>
    <SlideCard
      index="4"
      type="responsive"
    >
      <div slot="article">
        <p>這一天，林試所副所長吳孟玲和謝翁維等三位台灣樹木醫院的樹藝師，帶我們到台北植物園外的行道樹展開監測工作。</p>
        <p>「通常在做檢測之前，會先敲擊樹木，看敲擊的聲音是不是空洞的，」謝翁維拿著一把槌子，在外表看似健康的行道樹上左敲敲、右敲敲，憑聲音判斷樹木的空洞狀況。</p>
      </div>
    </SlideCard>
    <SlideCard index="5" type="responsive" :noText="true" />
    <SlideCard
      index="6"
      type="responsive"
    >
      <div slot="article">
        <p>為更專業診斷樹木空洞深度，樹藝師拿出鑽孔阻抗儀，儀器內部設有長達50公分的細針頭，利用把針鑽進去時遇到的阻力變化，測量樹木空洞狀況。</p>
        <p>謝翁維指出，通常若樹木的空洞佔樹幹的比例達50%，便已達危木標準，須進行處理，「如果這棵危木是在人、車常經之地，標準又會更嚴格。」</p>
      </div>
    </SlideCard>
    <SlideCard
      index="7"
      type="responsive"
    >
      <div slot="article">
        <p>除了對樹木進行檢測，「治療樹木」也是樹藝師的首要工作。</p>
        <p>謝翁維拿出能把殺蟲劑注入樹中的樹木微注射技術設備，「相較於把殺蟲劑噴在樹上，直接用打針的，對環境的汙染比較小，使用的殺蟲劑劑量也比較少。」</p>
      </div>
    </SlideCard>
    <SlideCard
      index="8"
      type="responsive"
    >
      <div slot="article">
        <SlideCardQuote :textLeft="true">
          <h3 slot="text">「讓樹活得像樹」</h3>
          <p slot="name">─樹藝師謝翁維的醫樹哲學</p>
        </SlideCardQuote>
        <p>謝翁維表示，自己都是從科學、專業的角度治療樹木，有時候遇到一些不容易治療的樹，他甚至會建議放棄救樹。</p>
        <p>「有人會因此說我對樹沒有感情，」但謝翁維寧可被貼上「太過理性」的標籤，也不願不計成本去救不該被救起的樹木。</p>
        <p>許多治療樹的方式十分殘酷─樹的根系完全被切除，僅能用鋼構支撐，有些人會覺得，救了這棵樹的樹藝師的技術高超，但對謝翁維來說，「樹都已經不太像樹了，於心何忍？」</p>
        <p>謝翁維指出，政府應建立起一套機制與標準，規定樹的不健康程度若達一定標準，就應該被換掉，而不是一昧認為一定要救樹，以免樹的生命雖然延續了，卻是以悲慘的形式活著。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="9"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="爬樹的人"
          second="攀樹師廖偉健"
        />
        <p>丟沙袋、掛攀樹繩、起身上樹，才一眨眼，廖偉健已爬上兩層樓高的大樹，他熟練的在樹幹上行走，動作輕盈地幾乎未驚動任何樹幹與枝條。</p>
        <p>身為專業攀樹師，廖偉健的日常工作包含修剪枝條、清理枯枝、採集種子等，只要是須要爬到樹上的工作，都是攀樹師的工作，12年下來，廖偉健已爬了約3,000棵的樹。</p>
        <ArticleColumnOne
          :srcMob="require('~/img/grow-up-healthily/slide_9/c_mob.jpg')"
          :srcPad="require('~/img/grow-up-healthily/slide_9/c_pad.jpg')"
          :srcPc="require('~/img/grow-up-healthily/slide_9/c_pc.jpg')"
          alt='攀樹師工作時會用到的各項器材。圖／記者陳正興'
        >
          攀樹師工作時會用到的各項器材。圖／記者陳正興
        </ArticleColumnOne>
      </div>
    </SlideCard>
    <SlideCard index="10" type="responsive" :noText="true" />
    <SlideCard
      index="11"
      type="responsive"
    >
      <div slot="article">
        <p>樹上的世界，和地面上的世界，有什麼不同？除了迷人的風景外，讓廖偉健最有感觸的，是樹木身上的「傷痕」。</p>
      </div>
    </SlideCard>
    <SlideCard index="12" type="responsive" :noText="true" />
    <SlideCard
      index="13"
      type="responsive"
    >
      <div slot="article">
        <p>廖偉健表示，一般人永遠都是從底下看樹木，但攀樹師是從樹上往下看，而樹的許多傷痕，是一般人在樹底下看不到的。</p>
        <p>「對我來說，爬樹有一種，對生命尊重的氣場，」每當廖偉健爬上大樹，看到樹儘管傷痕累累，卻仍好好活著，讓他意識到，人也應該好好活著。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="14"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="種樹的人"
          second="高雄長庚名譽院長陳肇隆"
        />
        <p>踏進高雄長庚醫院院區，放眼盡是連綿不絕的綠。兒童醫院前，百年雨豆樹、一甲子菩提在土肉桂樹林裡各據一方，醫院停車場被大樹綠海包圍。育成這片綠意盎然的，就是名震亞洲的「換肝之父」、高雄長庚醫院名譽院長陳肇隆。</p>
        <p>「我是愛樹的人。」高雄長庚有9,000多棵喬木，5,000多棵都出自陳肇隆的苗圃。他親手從種子培育成樹苗，再移植到長庚院區。</p>
        <p>陳肇隆是國際換肝權威，創下國際多項換肝手術紀錄。這雙救人無數的手，也是鬆土、播種、育苗、種樹的手。</p>
      </div>
    </SlideCard>
    <SlideCard index="15" type="responsive" :noText="true" />
    <SlideCard
      index="16"
      type="responsive"
    >
      <div slot="article">
        <SlideCardQuote>
          <h3 slot="text">「種樹或種肝，都是生命的移植。換肝一次救一個人，種樹卻能世世代代守護大地。 」</h3>
          <p slot="name">─高雄長庚名譽院長陳肇隆</p>
        </SlideCardQuote>
        <p>陳肇隆愛上種樹，緣自於朋友贈送的一棵肉桂樹。肉桂種子11月掉落，他好奇撿拾栽培，出芽率奇高，仿如源源不絕的生命熱力，從種子育成幼苗，長成小樹再分送移植，愈培育愈多。</p>
        <p>高雄長庚的樹歷經風吹雨打，卻沒倒過。陳肇隆說，他種樹土法煉鋼，從種子開始育苗，從小盆換到大盆，最後再移植到土壤裡，「換盆不斷根」不破壞根系，樹會長得非常壯。</p>
        <p>「任何事都一樣，Never too Late（永不嫌晚）。」陳肇隆說，常人眼裡，種樹是小事，但勿以善小而不為，全台一人種一棵樹，力量就非常可觀。</p>
      </div>
    </SlideCard>
    <SlideCard
      index="17"
      type="responsive"
    >
      <div slot="article">
        <SlideCardTitle
          first="種樹的人"
          second="新光金控董事洪士琪"
          :titleRight="true"
        />
        <p>「10年後，山坡上的台灣欒樹長起來，那種震撼人心的美，我已經可以想像。」在新北、基隆交界的深澳山上，腳上套著長筒雨鞋的新光金控董事洪士琪，環顧身處的這座翠綠山頭，說著他擘畫的山林願景。</p>
        <p>不到50歲的洪士琪出身泛新光集團第三代，4年前從事業高峰的專業經理人，轉身成為揮汗的種樹人。</p>
      </div>
    </SlideCard>
    <SlideCard index="18" type="responsive" :noText="true" />
    <SlideCard
      index="19"
      type="responsive"
    >
      <div slot="article">
        <p>洪士琪天天在山友暱稱「瑞芳農場」的百公頃祖傳山林裡，彎著腰除草、挖土、種樹，樂此不疲。農委會林業試驗所副所長吳孟玲得知他有種樹夢想，前年調查「瑞芳農場」有250種台灣原生植物，是國家公園以外，少見未被擾動的生態處女地。</p>
        <p>林試所推動原生植物保種，但目前主要保存種子、種苗，因苗圃規模有限，種苗無法長成大樹，政府也苦無資源打造原生植物保種方舟園區。</p>
        <p>吳孟鈴認為瑞芳農場集大片土地、既有原生物種和企業資源三大條件，是打造保種中心的最佳選擇；去年「台灣原生植物保種中心」在瑞芳農場揭牌成立。</p>
        <p>「這可能是這輩子最不賺錢的『投資』，卻是我真正想做的事，也是獻給台灣最美的禮物。」</p>
        <p>百公頃土地之於商人，常是絕佳的變現工具；洪士琪說，以他的專業背景當然很懂要怎麼變現，但更重要的是，要為台灣的未來留下什麼？「希望百年後大家看到這片美景，提起我的名字時覺得還不錯，不是很市儈的感覺，這樣就值了。」</p>
      </div>
    </SlideCard>
    <SlideCard
      index="20"
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
            <p>聯合報新媒體中心、<br>視覺設計中心<br>數據中心</p>
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
