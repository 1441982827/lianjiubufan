import React, { Component } from 'react'

import ShadowUI from './ShadowUI'

class ShadowContainer extends Component {
  render() {
    return <ShadowUI {...this.props}>{this.props.children}</ShadowUI>
  }
}

export default ShadowContainer