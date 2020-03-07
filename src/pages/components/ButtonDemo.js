import React, { Component } from 'react'
import { Card, Button } from 'antd'
import IconFont from '../../components/IconFont'
import './styles.less'

class ButtonDemo extends Component {
  state = {
    loading: false
  }
  enterLoading = () => {
    this.setState(() => ({
      loading: true
    }))
    setTimeout(() => {
      this.setState(() => ({
        loading: false
      }))
    }, 3000)
  }

  render() {
    return (
      <div className="components-demo">
        <Card title="基础按钮" className="mb-15">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button danger>danger</Button>
          <Button type="link">Link</Button>
          <Button disabled>Disabled</Button>
        </Card>
        <Card title="图标按钮" className="mb-15">
          <Button type="primary" icon={<IconFont type="iconplus-circle"/>}>新增</Button>
          <Button type="primary" ghost icon={<IconFont type="iconedit-square"/>}>编辑</Button>
          <Button type="primary" danger icon={<IconFont type="icondelete"/>}>删除</Button>
          <Button type="primary" shape="circle">A</Button>
          <Button type="primary" icon={<IconFont type="iconsearch"/>}>查询</Button>
        </Card>
        <Card title="Loading" className="mb-15">
          <Button type="primary" loading>提交</Button>
          <Button type="primary" loading shape="circle"/>
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>提交</Button>
        </Card>
      </div>
    )
  }
}

export default ButtonDemo