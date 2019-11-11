import React, { Component } from 'react'

import PINUI from './PINUI'

class PINContainer extends Component {
  render() {
    return <PINUI {...this.props} />
  }
}

export default PINContainer
