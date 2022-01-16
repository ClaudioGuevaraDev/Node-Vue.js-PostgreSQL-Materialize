module.exports = {
    devServer: {
        proxy: {
            '^/': {
                target: 'http://localhost:4000/',
                ws: true,
                changeOrigin: true
            },
            '^/api': {
                target: 'http://localhost:4000/',
                ws: true,
                changeOrigin: true
            }
        }
    }
}