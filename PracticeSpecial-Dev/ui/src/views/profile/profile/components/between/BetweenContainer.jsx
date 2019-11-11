import React, { Component } from 'react'

import BetweenUI from './BetweenUI'

class BetweenContainer extends Component {
  render() {
    return <BetweenUI {...this.props}>{this.props.children}</BetweenUI>
  }
}

export default BetweenContainer