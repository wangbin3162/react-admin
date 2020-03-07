import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Layout, Button} from 'antd'
import NavLeft from '../components/NavLeft'
import GlobalHeader from '../components/Header'
import GlobalFooter from '../components/Footer'
import './layout.less'

const {Content} = Layout

class Layouts extends PureComponent {

  render() {
    return (
      <Layout className="basic-layout">
        <NavLeft/>
        <Layout style={{marginLeft: this.props.collapsed ? 80 : 256}}>
          <GlobalHeader/>
          <Content className="main-wrap">
            <div className="main-content" >
              <Button>测试按钮</Button>
            </div>
          </Content>
          <GlobalFooter/>
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
