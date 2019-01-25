const path = require("path");

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  runtimeCompiler: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["/home/specialjcg/site web/monsite/src/styles/global.scss"]
    }
  }
};
