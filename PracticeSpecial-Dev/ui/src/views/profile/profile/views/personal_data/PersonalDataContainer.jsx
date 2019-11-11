import React, { Component } from 'react'

import PersonalDataUI from './PersonalDataUI'

class PersonalDataContainer extends Component {
  render() {
    return <PersonalDataUI {...this.props} />
  }
}

export default PersonalDataContainer
