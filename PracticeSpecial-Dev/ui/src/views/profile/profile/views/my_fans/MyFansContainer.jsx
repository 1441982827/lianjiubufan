import React, { Component } from 'react'

import MyFansUI from './MyFansUI'

class MyFansContainer extends Component {
  render() {
    return <MyFansUI {...this.props} />
  }
}

export default MyFansContainer
