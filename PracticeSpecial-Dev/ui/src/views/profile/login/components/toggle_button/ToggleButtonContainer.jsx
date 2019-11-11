import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import ToggleButtonUI from './ToggleButtonUI'

class ToggleButtonContainer extends Component {
  render() {
    return (
      <NavLink to={this.props.to}>
        <ToggleButtonUI>{this.props.children}</ToggleButtonUI>
      </NavLink>
    )
  }
}

export default ToggleButtonContainer