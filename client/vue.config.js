module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: ` @import "~@/style/variable.scss";
                       @import "~@/style/mixin.scss";
                `
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3333',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/api"
                }
            },
        }
    }
}