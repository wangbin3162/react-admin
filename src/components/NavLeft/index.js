import React, { PureComponent } from 'react'
import MenuConfig from '../../router/menu.cfg'
import { connect } from 'react-redux'
import { Layout, Menu } from 'antd'
import IconFont from '../IconFont'
import './nav-left.less'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


const { SubMenu } = Menu
const { Sider } = Layout

class NavLeft extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      menuList: this.renderMenu(MenuConfig)
    }
  }

  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={
            <span>
              {item.icon ? <IconFont type={item.icon} style={{ fontsize: '20px' }}/> : null}
              <span>{item.title}</span>
            </span>
          }>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>
            {item.icon ? <IconFont type={item.icon} style={{ fontsize: '20px' }}/> : null}
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed} width={256} className="nav-left">
        <div className="logo">
          <img src={require('../../assets/images/logo-icon-a.png')} alt="logo"/>
          {
            this.props.collapsed ? null : <span>React Admin</span>
          }
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>
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

export default connect(mapStateToProps, null)(withRouter(NavLeft))