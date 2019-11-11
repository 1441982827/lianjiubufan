import React, { Component } from 'react'

import IndexUI from './IndexUI'

class IndexContainer extends Component {
  render() {
    return <IndexUI {...this.props} />
  }
}

export default IndexContainer