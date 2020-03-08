import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Error404 from '../pages/error/error404'
import Layout from '../layout'
import Home from '../pages/Home'
import ButtonDemo from '../pages/components/ButtonDemo'
import ModalDemo from '../pages/components/ModalDemo'
import LoadingDemo from '../pages/components/LoadingDemo'
import NoticeDemo from '../pages/components/NoticeDemo'
import TabsDemo from '../pages/components/tabsDemo'
import GalleryDemo from '../pages/components/GalleryDemo'
import LoginForm from '../pages/form/LoginForm'

class Index extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/home"/>}/>
            <Route path="/login" component={Login}/>
            <Layout>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/components/buttons" component={ButtonDemo}/>
                <Route path='/components/modal' component={ModalDemo}/>
                <Route path="/components/loading" component={LoadingDemo}/>
                <Route path="/components/notice" component={NoticeDemo}/>
                <Route path="/components/tabs" component={TabsDemo}/>
                <Route path="/components/gallery" component={GalleryDemo}/>
                <Route path="/form/loginForm" component={LoginForm}/>
                <Route component={Error404}/>
              </Switch>
            </Layout>
          </Switch>
        </App>
      </Router>
    )
  }
}

export default Index