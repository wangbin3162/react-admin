import React, {PureComponent} from 'react'
import {actionCreator} from '../../layout/store'
import {connect} from 'react-redux'
import {Layout, Breadcrumb} from 'antd'
import IconFont from '../IconFont'
import Util from '../../utils/util'
import './header.less'
import {getWeather} from '../../api/weather.api'

const {Header} = Layout

class GlobalHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userName: '王彬',
      sysTime: '',
      dayPictureUrl: '',
      weather: ''
    }
  }

  componentDidMount() {
    // 设置时间
    this.setState(() => ({
      sysTime: Util.parseTime(new Date(), '{y}-{m}-{d}')
    }))
    // 设置天气
    getWeather().then(res => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState(() => ({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        }))
      }
    })

  }

  render() {
    return (
      <Header className="header-wrap" style={{left: this.props.collapsed ? '80px' : '256px'}}>
        <div className="header-info" data-flex="main:justify cross:center">
          <div className="left">
            <IconFont className="trigger"
                      type={this.props.collapsed ? 'iconindent' : 'iconoutdent'}
                      onClick={this.props.toggleSidebar}/>
            <div className="breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="right">
            <div className="btn weather">
              <span>{this.state.sysTime}</span>
              <img src={this.state.dayPictureUrl} alt=""/>
              <span>{this.state.weather}</span>
            </div>
            <div className="btn avatar">欢迎，{this.state.userName}</div>
          </div>
        </div>
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