import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import BackButtonUI from './BackButtonUI'

class BackButtonContainer extends Component {
  render() {
    return <BackButtonUI onBack={this.handleBack} />
  }

  handleBack = z => this.props.history.goBack()
}

export default withRouter(BackButtonContainer)