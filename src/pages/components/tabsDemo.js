import React, { Component } from 'react'
import { Card, Tabs, message, Button } from 'antd'
import IconFont from '../../components/IconFont'

const { TabPane } = Tabs

class TabsDemo extends Component {
  constructor(props) {
    super(props)
    this.newTabIndex = 0
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' }
    ]
    this.state = {
      activeKey: panes[0].key,
      panes
    }
  }


  callback = (key) => {
    message.info(`选择了标签页${key}`)
  }
  onChange = activeKey => {
    this.setState({ activeKey })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  add = () => {
    const { panes } = this.state
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({ title: 'New Tab' + activeKey, content: 'New Tab Pane' + activeKey, key: activeKey })
    this.setState({ panes, activeKey })
  }
  remove = targetKey => {
    let { activeKey } = this.state
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key
      } else {
        activeKey = panes[0].key
      }
    }
    this.setState({ panes, activeKey })
  }

  render() {
    return (
      <div className="components-demo">
        <Card title="基础用法" className="mb-15">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">标签页 1</TabPane>
            <TabPane tab="Tab 2" key="2">标签页 2</TabPane>
            <TabPane tab="Tab 3" key="3">标签页 3</TabPane>
          </Tabs>
        </Card>
        <Card title="带图标的" className="mb-15">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><IconFont type="iconuser"/> tab1</span>} key="1">标签页 1</TabPane>
            <TabPane tab={<span><IconFont type="iconskin"/> tab2</span>} key="2">标签页 2</TabPane>
            <TabPane tab={<span><IconFont type="iconstar"/> tab3</span>} key="3">标签页 3</TabPane>
          </Tabs>
        </Card>
        <Card title="卡片类型" className="mb-15">
          <Tabs defaultActiveKey="1" onChange={this.callback} type="card">
            <TabPane tab="Tab 1" key="1">标签页 1</TabPane>
            <TabPane tab="Tab 2" key="2">标签页 2</TabPane>
            <TabPane tab="Tab 3" key="3">标签页 3</TabPane>
          </Tabs>
        </Card>
        <Card title="动态卡片" className="mb-15">
          <div style={{ marginBottom: 16 }}>
            <Button onClick={this.add}>ADD</Button>
          </div>
          <Tabs activeKey={this.state.activeKey}
                onChange={this.onChange}
                type="editable-card"
                onEdit={this.onEdit}
                hideAdd
          >
            {
              this.state.panes.map(pane => {
                return <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default TabsDemo