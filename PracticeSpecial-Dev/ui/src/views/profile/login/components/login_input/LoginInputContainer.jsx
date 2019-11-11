import React, { Component } from 'react'

import LoginInputUI from './LoginInputUI'

class LoginInputContainer extends Component {
  render() {
    return <LoginInputUI {...this.props} />
  }
}

export default LoginInputContainer
