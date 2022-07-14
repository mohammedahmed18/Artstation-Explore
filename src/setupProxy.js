const { createProxyMiddleware } = require("http-proxy-middleware");
const proxy = {
  target: "https://www.artstation.com",
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/**", createProxyMiddleware(proxy));
};
