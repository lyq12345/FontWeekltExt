/*
 * @Description:
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-28 16:06:51
 * @LastEditors: gfge
 * @LastEditTime: 2020-07-29 13:07:55
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
