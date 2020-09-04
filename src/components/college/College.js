/*
 * @Description:
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-28 16:36:51
 * @LastEditors: gfge
 * @LastEditTime: 2020-07-28 18:45:27
 */
import React, { Component } from "react";
import { Tabs } from "antd";
import "./index.css";
import Contribute from "../contribute";

const { TabPane } = Tabs;
class College extends Component {
  render() {
    return (
      <div className="college-tab">
        <Tabs defaultActiveKey="3">
          <TabPane tab="小报" key="1">
            小报
          </TabPane>
          <TabPane tab="归档" key="2">
            归档
          </TabPane>
          <TabPane tab="投稿" key="3">
            <Contribute />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default College;
