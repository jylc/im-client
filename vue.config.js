module.exports = {
  publicPath: '/',
  devServer: {
    host: '0.0.0.0',
    port: 8088,
    https: false,
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '私密聊天'
      return args
    })
  },
  devServer: {
    proxy: {
      '': {
        target: 'http://127.0.0.1:9999',
        changeOrigin: true,
        ws: true,
        pathRewrite: {},
      },
    },
  },
}
