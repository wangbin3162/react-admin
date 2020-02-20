import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'

const { Header, Content, Footer, Sider } = Layout

class Layouts extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <Layout className="basic-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
               style={{
                 overflow: 'auto',
                 height: '100vh',
                 position: 'fixed',
                 left: 0
               }}>
          <div className="logo">
            <img src={require('../assets/images/logo-icon-a.png')} alt="logo"/>
            {
              this.state.collapsed ? null : <span>React Admin</span>
            }
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user"/>
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera"/>
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload"/>
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
          <Header style={{
            background: '#fff',
            padding: 0,
            height: '64px',
            position: 'fixed',
            left: this.state.collapsed ? '80px' : '200px',
            right: 0,
            boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            transition: 'left .2s'
          }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px 0', paddingTop: '64px', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Layouts
