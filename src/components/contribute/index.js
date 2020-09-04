/*
 * @Description:
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-28 17:44:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-25 13:21:24
 */
import './index.css'
import React, { Component } from 'react'
import { Form, Input, Button, Select, message, Cascader } from 'antd'
import axios from 'axios'
import { options } from './categories'

const { Item } = Form
const { TextArea } = Input
const formItemLayout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 10,
  },
}

class Contribute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      nickname: '',
      category: '',
      referrer: '',
      link: '',
    }
  }

  componentDidMount() {
    let _this = this
    /*global chrome*/
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        let tabId = tabs.length ? tabs[0].id : null
        // 向当前页面注入 JavaScript 脚本
        chrome.tabs.executeScript(
          tabId || null,
          {
            file: '/static/js/recommend.js',
          },
          function () {
            //向目标网页进行通信，向 recommend.js 发送一个消息
            chrome.tabs.sendMessage(
              tabId,
              {
                message: 'GET_TOPIC_INFO',
              },
              function (response) {
                //获取到返回的文章 title 、url、description
                _this.refs.formRef.setFieldsValue({
                  title: response.title,
                  description: response.description,
                })
                _this.setState({
                  link: response.link,
                })
              }
            )
          }
        )
      }
    )
  }
  handleClickMin() {
    let formData = new Object()
    formData = this.refs.formRef.getFieldsValue([
      'title',
      'description',
      'referrer',
    ])
    console.log(this.refs.formRef.getFieldsValue(['category']))
    console.log(this.refs.formRef.getFieldsValue(['referrer']))
    if (
      this.refs.formRef.getFieldsValue(['category']).category === undefined ||
      this.refs.formRef.getFieldsValue(['category']).category === ''
    ) {
      message.warning('请设置投稿分类')
      return
    }
    if (
      this.refs.formRef.getFieldsValue(['referrer']).referrer === undefined ||
      this.refs.formRef.getFieldsValue(['referrer']).referrer === ''
    ) {
      message.warning('请输入你的昵称')
      return
    }
    let category = this.refs.formRef.getFieldsValue(['category']).category.pop()
    formData.category = category
    formData.link = this.state.link
    axios
      .post('http://119.3.146.159:8081/qiao/saveInfo', formData)
      .then((res) => {
        if (res.status === 200) {
          message.success('投稿成功，感谢分享！')
        }
      })
      .catch((err) => {
        message.error('投稿失败！')
      })
  }

  // Just show the latest item.
  displayRender(label) {
    return label[label.length - 1]
  }
  render() {
    return (
      <div>
        <Form layout="vertical" ref="formRef" name="contribute-form">
          <Item name="title" label="文章标题">
            <Input />
          </Item>
          <Item name="description" label="推荐理由">
            <TextArea rows={4} />
          </Item>
          <Item
            name="referrer"
            label="投稿人昵称"
            {...formItemLayout}
            rules={[{ required: true, message: '请输入你的昵称!' }]}
          >
            <Input placeholder="nickname" />
          </Item>
          <Item
            name="category"
            label="设置分类"
            {...formItemLayout}
            rules={[{ required: true, message: '请选择投稿分类' }]}
          >
            <Cascader
              options={options}
              expandTrigger="hover"
              displayRender={this.displayRender}
            ></Cascader>
          </Item>
          <Item>
            <Button type="primary" onClick={this.handleClickMin.bind(this)}>
              投稿
            </Button>
          </Item>
        </Form>
      </div>
    )
  }
}

export default Contribute
