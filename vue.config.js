const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const pages = require("./pages_config/pages.js");
// const publicPath = process.env.NODE_ENV === 'production' ? 'https://udn.com/newmedia/2020/scream-of-trees/' : './';
const publicPath = process.env.NODE_ENV === 'production' ? 'https://nmdap.udn.com.tw/test/scream-of-trees/' : './';

module.exports = {
  publicPath: publicPath,
  productionSourceMap: false,
  pages,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.resolve.alias
      .set('~', resolve('src/assets'))
  }
}