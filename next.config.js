const bsconfig = require('./bsconfig.json');
const withCSS = require('@zeit/next-css');

const transpileModules = ["bs-platform"].concat(bsconfig["bs-dependencies"]);
const withTM = require("next-transpile-modules")(transpileModules);

const config = {
  target: 'serverless',
  pageExtensions: ["jsx", "js", "bs.js", "ts", "tsx"],
  env: {
    SERVER: process.env.SERVER
  }
};

module.exports = withTM(withCSS(config));

