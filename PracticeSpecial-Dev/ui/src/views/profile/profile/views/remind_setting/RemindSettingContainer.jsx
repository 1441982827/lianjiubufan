import React, { Component } from 'react'

import RemindSettingUI from './RemindSettingUI'

class RemindSettingContainer extends Component {
  handleChange(isChecked) {
    // console.log(isChecked)
  }

  render() {
    return <RemindSettingUI handleChange={this.handleChange} {...this.props} />
  }
}

export default RemindSettingContainer
