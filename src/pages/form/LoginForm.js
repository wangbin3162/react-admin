import React, { Component } from 'react'
import { Card, Form, Input, Button } from 'antd'

const FormItem = Form.Item
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

class LoginForm extends Component {

  formRef = React.createRef()

  onFinish = values => {
    console.log('Success:', values)
  }


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  onReset = () => {
    this.formRef.current.resetFields()
  }

  onFill = () => {
    this.formRef.current.setFieldsValue({
      username: 'admin',
      password: '123456'
    })
  }


  render() {
    return (
      <div>
        <Card title="行内表单" className="mb-15">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="输入密码 "/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="水平表单" className="mb-15">
          <Form {...layout} style={{ width: 300 }} ref={this.formRef}
                onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <FormItem label="用户名"
                      name="username"
                      rules={[
                        { required: true, message: '用户名必填', trigger: 'blur' }
                      ]}>
              <Input placeholder="输入用户名"/>
            </FormItem>
            <FormItem label="密码"
                      name="password"
                      rules={[
                        { required: true, message: '密码必填', trigger: 'blur' }
                      ]}>
              <Input placeholder="输入密码 "/>
            </FormItem>
            <Button block type="primary" htmlType="submit">登录</Button>
          </Form>

          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={this.onFill}>
            Fill form
          </Button>
        </Card>
      </div>
    )
  }
}

export default LoginForm