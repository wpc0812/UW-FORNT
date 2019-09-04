const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  
  devServer: {
    // proxy: 'http://192.168.43.119:8763' //手机
    // proxy: 'http://192.168.137.254:8763' //电脑
    // proxy: 'http://localhost:3000',//模拟数据
    // 11.205.241.116 葛超印
    //11.205.241.15 金生哥
    // 11.205.241.56 吕鑫
    // 11.205.241.53 天宇
    //http://11.205.242.159  刘晓晨
    
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    // 查阅 参数描述 https://github.com/chimurai/http-proxy-middleware
    proxy: {
        '/apis': {
            target: 'http://11.205.241.53:8082',
            pathRewrite: {
                '^/apis': ''
            },
            timeout: 3000,
            changeOrigin: true
        }
    },
    before: app => { }
    
  },

  lintOnSave:false,//是否开启eslint保存检测，有效值：true||false||error

  configureWebpack:(config)=>{
    //入口文件
    config.entry.app = ['babel-polyfill', './src/main.js'];
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('static', resolve('static/'))
  },
}
