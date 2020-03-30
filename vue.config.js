const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
const pages = require("./pages_config/pages.js");

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.resolve.alias
      .set('~', resolve('src/assets'))
  },
  pages
}