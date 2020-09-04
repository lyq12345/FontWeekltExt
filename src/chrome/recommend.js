/*
 * @Description:注入脚本
 * @Version: 2.0
 * @Autor: joe
 * @Date: 2020-07-29 09:14:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-01 10:56:51
 */

/*global chrome*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'GET_TOPIC_INFO') {
    // 获取 title
    let title = document.getElementsByTagName('title')[0].textContent
    let descriptionEl = document.querySelectorAll('meta[name=description]')[0]
    // 获取 描述
    let description = descriptionEl
      ? descriptionEl.getAttribute('content')
      : title
    // 发送数据
    sendResponse({
      title: title.trim(),
      link: location.href,
      description: description.trim(),
    })
  } else if (request.message === 'SIGN_RELOAD') {
    console.log('request, sender', request, sender)
  }
})
