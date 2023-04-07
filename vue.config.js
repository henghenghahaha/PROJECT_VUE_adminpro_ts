const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  publicPath: '/dist',
  devServer: {
    proxy: {
      '/update': {
        target: 'https://www.duc.university/update', //请求的服务器地址
        pathRewrite: {
          '^/update': ''
        }, //可以让发过去的请求不带/update打头
        changeOrigin: true
      },
      '/alter': {
        target: 'https://www.duc.university/alter', //请求的服务器地址
        pathRewrite: {
          '^/alter': ''
        }, //可以让发过去的请求不带/alter打头
        changeOrigin: true
      },
      '/changeInfo': {
        target: 'https://www.duc.university/changeInfo', //请求的服务器地址
        pathRewrite: {
          '^/changeInfo': ''
        }, //可以让发过去的请求不带/changeInfo打头
        changeOrigin: true
      },
      '/addlog': {
        target: 'https://www.duc.university/addlog', //请求的服务器地址
        pathRewrite: {
          '^/addlog': ''
        }, //可以让发过去的请求不带/addlog打头
        changeOrigin: true
      },
      '/modifylog': {
        target: 'https://www.duc.university/modifylog', //请求的服务器地址
        pathRewrite: {
          '^/modifylog': ''
        }, //可以让发过去的请求不带/modifylog打头
        changeOrigin: true
      },
      '/querylog': {
        target: 'https://www.duc.university/querylog', //请求的服务器地址
        pathRewrite: {
          '^/querylog': ''
        }, //可以让发过去的请求不带/querylog打头
        changeOrigin: true
      },
    }
  }
})
