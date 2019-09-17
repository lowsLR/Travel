const path = require("path");
const travel = require("./data/index.json");
const picture = travel;
const info = require("./data/informatio.json");
const Sidebar = info;
const city = require("./data/city.json");
const CityData = city;
const scenery = require("./data/detail.json");
const sceneryData = scenery;
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "public/scss/*.scss")]
    }
  },
  configureWebpack: {
    devServer: {
      before: function(app, server) {
        app.get("/api/data", function(req, res) {
          res.json(picture);
        });
        app.get("/sidebar/info", function(req, res) {
          res.json(Sidebar);
        });
        app.get("/api/city", function(req, res) {
          res.json(CityData);
        });
        app.get("/api/scenery", function(req, res) {
          res.json(sceneryData);
        });
      },
      proxy: {
        // 配置转发的域 /api下面的请求均发起转发
        "/apil": {
          target: "http://pv.sohu.com", //这里是域名，不是完整地址
          changeOrigin: true, //是否跨域
          pathRewrite: {
            "^/apil": ""
          }
        }
      }
    }
  }
};
