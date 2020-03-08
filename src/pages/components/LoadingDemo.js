import React, { Component } from 'react'
import { Card, Spin, Alert } from 'antd'
import IconFont from '../../components/IconFont'

class LoadingDemo extends Component {
  render() {
    return (
      <div className="components-demo">
        <Card title="基本用法" className="mb-15">
          <Spin size="large"/>&nbsp;&nbsp;
          <Spin/>&nbsp;&nbsp;
          <Spin size="small"/>&nbsp;&nbsp;
          <Spin indicator={<IconFont type="iconloading" style={{ fontSize: 24 }} spin/>}/>
        </Card>
        <Card title="内容遮罩" className="mb-15">
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}

export default LoadingDemo