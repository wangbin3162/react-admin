import React, { Component } from 'react'
import MenuConfig from '../../config/menu.cfg'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import IconFont from '../IconFont'

const { SubMenu } = Menu
const { Sider } = Layout

class NavLeft extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuList: this.renderMenu(MenuConfig)
    }
    console.log(this.state.menuList)
  }

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={
            <span>
              {item.icon ? <IconFont type={item.icon} /> : null}
              <span>{item.title}</span>
            </span>
          }>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          {item.icon ? <IconFont type={item.icon} /> : null}
          <span>{item.title}</span>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo">
          <img src={require('../../assets/images/logo-icon-a.png')} alt="logo" />
          {
            this.props.collapsed ? null : <span>React Admin</span>
          }
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/admin/home']}>
          {this.state.menuList}
        </Menu>
      </Sider>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    collapsed: state.getIn(['layout', 'collapsed'])
  }
}

export default connect(mapStateToProps, null)(NavLeft)