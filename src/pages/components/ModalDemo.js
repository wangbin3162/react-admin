import React, { Component } from 'react'
import { Modal, Button, Card, message } from 'antd'

class ModalDemo extends Component {
  state = {
    loading: false,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  }
  showModal = (type) => {
    this.setState(() => ({
      [type]: true
    }))
  }
  showModalBox = (type) => {
    Modal[type]({
      title: '标题',
      content: 'modal box content...',
      onOk() {
        message.info('点击确认')
      },
      onCancel() {
        message.info('点击取消')
      }
    })
  }

  render() {
    return (
      <div className="components-demo">
        <Card title="基础弹窗" className="mb-15">
          <Button type="primary" onClick={() => this.showModal('modal1')}>Open</Button>
          <Button type="primary" ghost onClick={() => this.showModal('modal2')}>自定义页脚</Button>
          <Button type="primary" ghost onClick={() => this.showModal('modal3')}>顶部80px</Button>
          <Button type="primary" ghost onClick={() => this.showModal('modal4')}>水平垂直居中</Button>
        </Card>
        <Card title="确认弹窗" className="mb-15">
          <Button type="primary" ghost onClick={() => this.showModalBox('confirm')}>confirm</Button>
          <Button type="primary" ghost onClick={() => this.showModalBox('info')}>info</Button>
          <Button type="primary" ghost onClick={() => this.showModalBox('success')}>success</Button>
          <Button type="primary" ghost onClick={() => this.showModalBox('warning')}>warning</Button>
          <Button danger onClick={() => this.showModalBox('error')}>error</Button>
        </Card>

        <Modal
          title="普通弹窗"
          visible={this.state.modal1}
          onOk={() => this.setState(() => ({ modal1: false }))}
          onCancel={() => this.setState(() => ({ modal1: false }))}
        >
          <p>普通的内容。。。</p>
        </Modal>

        <Modal
          title="自定义页脚"
          visible={this.state.modal2}
          onOk={() => this.setState(() => ({ modal2: false }))}
          onCancel={() => this.setState(() => ({ modal2: false }))}
          footer={[
            <Button key="back" onClick={() => this.setState(() => ({ modal2: false }))}>Return</Button>,
            <Button key="submit" type="primary" loading={this.state.loading}
                    onClick={() => {
                      this.setState({ loading: true })
                      setTimeout(() => {
                        this.setState({ loading: false, modal2: false })
                      }, 3000)
                    }}>
              Submit
            </Button>
          ]}>
          <p>普通的内容。。。</p>
        </Modal>

        <Modal
          title="距离顶部80"
          style={{ top: 80 }}
          visible={this.state.modal3}
          onOk={() => this.setState(() => ({ modal3: false }))}
          onCancel={() => this.setState(() => ({ modal3: false }))}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>

        <Modal
          title="水平垂直居中"
          centered
          visible={this.state.modal4}
          onOk={() => this.setState(() => ({ modal4: false }))}
          onCancel={() => this.setState(() => ({ modal4: false }))}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    )
  }
}

export default ModalDemo