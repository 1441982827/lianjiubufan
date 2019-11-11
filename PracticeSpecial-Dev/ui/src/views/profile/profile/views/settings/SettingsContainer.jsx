import React, { Component } from 'react'

import SettingsUI from './SettingsUI'

class SettingsContainer extends Component {
  render() {
    return <SettingsUI {...this.props} />
  }
}

export default SettingsContainer