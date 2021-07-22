import "./public-path";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Link } from "react-router-dom";

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/react" : "/"}>
      <App />
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  storeTest(props)
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  // 为了演示效果明显增加定时器
  setTimeout(() => {
    props.setGlobalState &&
      props.setGlobalState({
        id: `${props.name}_子应用`,
      });
  }, 3000);
}
reportWebVitals();
