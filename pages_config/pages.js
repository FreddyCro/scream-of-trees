const contentGenerator = require('./contentGenerator.js')

/* seo內容文件 */
const monitorCode = contentGenerator('./seo_content/monitor.html');
const authorContent = contentGenerator('./seo_content/author.html');
const screamOfTreesContent = contentGenerator('./seo_content/scream-of-trees.html');
const noChanceToGrowContent = contentGenerator('./seo_content/no-chance-to-grow.html');
const howManyTreesContent = contentGenerator('./seo_content/how-many-trees.html');
const growUpHealthily = contentGenerator('./seo_content/grow-up-healthily.html');

/* 正式路徑 */
const pathRoot = process.env.NODE_ENV === 'production' ? 'https://udn.com/newmedia/2020/scream-of-trees/' : 'http://localhost:8080/';
/* 測試路徑 */
// const pathRoot = process.env.NODE_ENV === 'production' ? 'https://nmdap.udn.com.tw/test/scream-of-trees/' : 'http://localhost:8080/';

const noChanceToGrow_path = 'no-chance-to-grow/';
const howManyTrees_path = 'how-many-trees/';
const growUpHealthily_path = 'grow-up-healthily/';

/* 作者 */
const author = '鄭朝陽、郭琇真、洪敬浤、王昭月、翁禎霞、蔡容喬、余采瀅、陳雅玲、謝汶均、許瑋琳、楊若榆、聯合報新媒體中心、視覺設計中心、數據中心、聯合報新聞部、聯合報系願景工作室';

module.exports = {
  publicPath: pathRoot,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '樹的無聲吶喊 | 專題 | 聯合報',
      description: '我們拚命種樹，卻種出許多處境悲慘的樹。《聯合報》採訪團隊走訪各縣市種樹現場，記錄了不同棵樹的幸與不幸，期許台灣社會不僅要會種樹，更要懂得「把樹種好」。',
      keywords: '種樹、植樹、大官樹',
      author: author,
      datePublished: '2020-04-22 T12:00:00+08:00',
      dateModified: '2020-04-23 T12:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: screamOfTreesContent + authorContent,
      pageUrl: pathRoot,
      publicPath: pathRoot,
    },
    noChanceToGrow: {
      entry: 'src/subpages/no-chance-to-grow/main.js',
      template: 'public/index.html',
      filename: 'no-chance-to-grow/index.html',
      title: '來不及長大的樹 | 專題 | 聯合報',
      description: '政府歷年送出上萬株樹苗給民眾響應種樹，但六都的綠覆率依然極低。政府送出的樹都種去哪了？為什麼歷屆大官樹存活率差這麼多？又是什麼原因，讓我們種下的樹，常常來不及長大？',
      keywords: '種樹、植樹、大官樹、尿布樹',
      author: author,
      datePublished: '2020-04-22 T12:00:00+08:00',
      dateModified: '2020-04-23 T12:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: noChanceToGrowContent + authorContent,
      pageUrl: pathRoot + noChanceToGrow_path,
      publicPath: pathRoot,
    },
    howManyTrees: {
      entry: 'src/subpages/how-many-trees/main.js',
      template: 'public/index.html',
      filename: 'how-many-trees/index.html',
      title: '台灣還要種多少樹才夠？ | 專題 | 聯合報',
      description: '當國際主要都市正積極種樹，台灣卻還在與樹爭地。台灣都會區有多少樹？我們到底還要種多少樹才夠？',
      keywords: '種樹、植樹、綠覆率、海岸造林、慈心',
      author: author,
      datePublished: '2020-04-22 T12:00:00+08:00',
      dateModified: '2020-04-23 T12:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: howManyTreesContent + authorContent,
      pageUrl: pathRoot + howManyTrees_path,
      publicPath: pathRoot,
    },
    growUpHealthily: {
      entry: 'src/subpages/grow-up-healthily/main.js',
      template: 'public/index.html',
      filename: 'grow-up-healthily/index.html',
      title: '讓我們的樹健康長大 | 專題 | 聯合報',
      description: '行道樹是都會珍貴的綠資源，但中空、染病、隨時可能倒塌的行道樹，卻成為道路上的隱憂。政府該怎麼做，才能有效掌握每棵行道樹的健康狀況？若遇到瀕死的樹木，是該讓他好好走完最後一程，還是應不惜成本搶救？',
      keywords: '種樹、攀樹師、樹藝師、褐根病',
      author: author,
      datePublished: '2020-04-22 T12:00:00+08:00',
      dateModified: '2020-04-23 T12:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: growUpHealthily + authorContent,
      pageUrl: pathRoot + growUpHealthily_path,
      publicPath: pathRoot,
    },
  }
}