var liveServer = require("live-server");
var path = require("path");

var params = {
  host: "localhost",
  port: 5000,
  root: path.resolve(__dirname, "../"),
  ignore: "../styles/index.scss, ../node_modules, ",
  wait: 1000,
  logLevel: 2
};

liveServer.start(params);
