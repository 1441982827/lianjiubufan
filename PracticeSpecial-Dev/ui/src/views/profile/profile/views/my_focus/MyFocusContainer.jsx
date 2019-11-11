import React, { Component } from 'react'

import MyFocusUI from './MyFocusUI'

class MyFocusContainer extends Component {
  render() {
    return <MyFocusUI {...this.props} />
  }
}

export default MyFocusContainer
