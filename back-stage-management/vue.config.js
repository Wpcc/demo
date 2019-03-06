const path = require('path')
const resolve = function (filename) {
  return path.resolve(__dirname, filename)
}
module.exports = {
  lintOnSave: false,
  devServer:{
    open:true
  },
  chainWebpack: config => {
    //更改原来的svg配置处理laoder
    const svgRule = config.module.rule('svg')
    svgRule
      .exclude
        .add(resolve('src/icons'))
        .end()
    //添加svg-sprite-loader配置
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
        .add(resolve('src/icons'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
  }
}
