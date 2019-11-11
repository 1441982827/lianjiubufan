const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    console.log('代理配置完成');
    app.use('/api', proxy({
      target: 'https://xuxuxu.club/',
      changeOrigin: true,
    }))
     app.use('/img', proxy({
      target: 'https://xuxuxu.club/',
      changeOrigin: true,
    }))
    app.use('/statics', proxy({
      target: 'https://xuxuxu.club/',
      changeOrigin: true,
    }))
}