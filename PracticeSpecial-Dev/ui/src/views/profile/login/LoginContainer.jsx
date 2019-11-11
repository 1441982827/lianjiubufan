import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import LoginUI from './LoginUI'

import FastLogin from './view/fast_login/'
import PWLogin from './view/pw_login/'
import ForgetPW from './view/forget_pw'
import NewPW from './view/new_pw'
import FastPIN from './view/fast_pin'
import ForgetPWPIN from './view/forget_pw_pin'

import http from 'utils/http/'

class LoginContainer extends Component {
  async componentDidMount() {
    const isLogin = await http.get({
      url: '/api/user/getstate'
    })
    isLogin && this.props.history.push('/plan')
  }

  render() {
    return (
      <LoginUI>
        <Switch>
          <Route path="/login/fast" component={FastLogin} />
          <Route path="/login/pw" component={PWLogin} />
          <Route path="/login/forget" component={ForgetPW} />
          <Route path="/login/new" component={NewPW} />
          <Route path="/login/fastpin" component={FastPIN} />
          <Route path="/login/forgetpin" component={ForgetPWPIN} />
          <Redirect from="/login" to="/login/fast" />
        </Switch>
      </LoginUI>
    )
  }
}

export default LoginContainer
