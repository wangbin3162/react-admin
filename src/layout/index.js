import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Layout, Button } from 'antd'
import NavLeft from '../components/NavLeft'
import GlobalHeader from '../components/Header'
import GlobalFooter from '../components/Footer'

const { Content } = Layout

class Layouts extends PureComponent {

  render() {
    return (
      <Layout className="basic-layout">
        <NavLeft />
        <Layout style={{ marginLeft: this.props.collapsed ? 80 : 256 }}>
          <GlobalHeader />
          <Content style={{ margin: '24px 16px 0', paddingTop: '64px', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              <Button>测试按钮</Button>
            </div>
          </Content>
          <GlobalFooter />
        </Layout>
      </Layout>
    )
  }
}

// 映射store 的state
const mapStateToProps = (state) => {
  return {
    collapsed: state.getIn(['layout', 'collapsed'])
  }
}

export default connect(mapStateToProps, null)(Layouts)
