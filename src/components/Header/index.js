import React, { PureComponent } from 'react'
import { actionCreator } from '../../layout/store'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import IconFont from '../IconFont'
const { Header } = Layout

class GlobalHeader extends PureComponent {
  render() {
    return (
      <Header style={{
        background: '#fff',
        padding: 0,
        height: '64px',
        position: 'fixed',
        left: this.props.collapsed ? '80px' : '256px',
        right: 0,
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        transition: 'left .2s'
      }}>
        <IconFont className="trigger"
          type={this.props.collapsed ? 'iconindent' : 'iconoutdent'}
          onClick={this.props.toggleSidebar} />
      </Header>
    )
  }
}

// 映射store 的state
const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['layout', 'collapsed'])
  }
}

// 映射store dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar() {
      dispatch(actionCreator.toggleSidebarAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader)