const path = require('path')
function  resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack:(config) => {
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('api',resolve('src/api'))
            .set('common',resolve('src/common'))
            .set('filters',resolve('src/filters'))
            .set('components',resolve('src/components'))
            .set('router',resolve('src/router'))
            .set('store',resolve('src/store'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
    }
}
