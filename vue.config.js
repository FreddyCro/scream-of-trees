const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const pagesConfig = require("./pages_config/pages.js");
const publicPath = pagesConfig.publicPath

module.exports = {
  publicPath: publicPath,
  productionSourceMap: false,
  pages: pagesConfig.pages,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.resolve.alias
      .set('~', resolve('src/assets'))
  }
}