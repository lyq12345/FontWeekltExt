/*
 * @Description:标签页
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-28 15:27:00
 * @LastEditors: gfge
 * @LastEditTime: 2020-07-28 18:43:50
 */

import React, { Component } from "react";
import { Tabs } from "antd";
import "./index.css";
import { FileOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";

import College from "../college/College.js";

const { TabPane } = Tabs;

class HeaderTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-tab">
        <Tabs defaultActiveKey="2" centered type="card">
          <TabPane
            tab={
              <span>
                <SettingOutlined />
                常用推荐
              </span>
            }
            key="1">
            常用推荐
          </TabPane>
          <TabPane
            tab={
              <span>
                <EditOutlined />
                前端学院
              </span>
            }
            key="2">
            <College />
          </TabPane>
          <TabPane
            tab={
              <span>
                <FileOutlined />
                前端文档
              </span>
            }
            key="3">
            前端文档内容
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default HeaderTab;
