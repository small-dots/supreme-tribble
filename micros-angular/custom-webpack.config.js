/*
 * @Desc:
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-21 14:40:11
 */
const appName = require("./package.json").name;
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    library: `${appName}-[name]`,
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_${appName}`,
  },
};
