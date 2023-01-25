const { defineConfig } = require('@vue/cli-service')

module.exports = {
  devServer: {
    proxy: {
      '/V1': {
        target: 'https://ICXCandidate:Welcome2022@imaginecx--tst2.custhelp.com/services/rest/connect/v1.3/',
        ws: true,
        changeOrigin: true,
      }
    }
  }
}
