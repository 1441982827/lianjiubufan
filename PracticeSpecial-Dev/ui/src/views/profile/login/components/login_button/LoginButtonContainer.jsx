import React, { Component } from 'react'

import LoginButtonUI from './LoginButtonUI'

class LoginButtonContainer extends Component {
  render() {
    return <LoginButtonUI handleClick={this.props.handleClick}>{this.props.children}</LoginButtonUI>
  }
}

export default LoginButtonContainer