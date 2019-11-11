import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login, Profile } from 'profile/'
import {Plan } from 'plan/index/'
import {Sport}  from 'sport/'
import { Community }  from 'community/view/index/'
// import { Article } from 'article'
import {time } from 'core-decorators'
import {Article } from 'article/'
import NotFound from './views/common/NotFound'


 class App extends Component {
  @time('练就非凡App 渲染')
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/plan" component={Plan}></Route>
        <Route path="/sport" component={Sport}></Route>
        <Route path="/article" component={Article}></Route>
        <Route path="/community" component={Community}></Route>
        <Route path="/article" component={Article}></Route>
        <Route path="/notfound" component={NotFound}></Route>
        <Redirect from="/" to="/login"></Redirect>
      </Switch>
    )
  }
}

export default App