const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const pages = require("./pages_config/pages.js");

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pages,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.resolve.alias
      .set('~', resolve('src/assets'))
  }
}