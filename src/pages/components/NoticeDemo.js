import React, { Component } from 'react'
import { Card, Button, notification, message } from 'antd'

class NoticeDemo extends Component {

  openNotification = () => {
    notification.open({
      message: '通知标题',
      description: '通知内容...'
    })
  }
  openNotificationWithIcon = type => {
    notification[type]({
      message: '通知标题',
      description: '带有类型和标题的通知'
    })
  }
  info = (type) => {
    message[type](`${type} message 通知消息`)
  }

  render() {
    return (
      <div className="components-demo">
        <Card title="notification" className="mb-15">
          <Button type="primary" onClick={this.openNotification}>Open</Button>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button danger onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </Card>
        <Card title="message" className="mb-15">
          <Button type="primary" onClick={() => this.info('info')}>Default Message</Button>
          <Button onClick={() => this.info('success')}>Success</Button>
          <Button onClick={() => this.info('warning')}>Warning</Button>
          <Button danger onClick={() => this.info('error')}>Error</Button>
          <Button type="primary" ghost onClick={() => {
            const hide = message.loading('正在提交...', 0)
            setTimeout(hide, 2500)
          }}>异步关闭</Button>
        </Card>
      </div>
    )
  }
}

export default NoticeDemo