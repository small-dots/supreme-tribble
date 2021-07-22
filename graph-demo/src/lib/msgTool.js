/*
 * @Desc: 消息发送
 * @Author: 安忠琪
 * @LastEditTime: 2021-07-13 14:12:18
 */
const MainMsgTool = {
  sendMsgToTop(param) {
    console.log(`send msg to top`, param);
    top.postMessage(param, `http://${top.location.host}`);
  },
  sendMsgToIframe(iframeId, param) {
    console.log(`send msg to iframe【${iframeId}】`, param);
    top.frames[iframeId].contentWindow.postMessage(
      param,
      `http://${top.location.host}`
    );
  },
  error(errorRemark, errorObj) {
    console.error(errorRemark, errorObj);
  },
  warn(warnRemark, warnObi) {
    console.warn(warnRemark, warnObi);
  },
};
export default MainMsgTool;
