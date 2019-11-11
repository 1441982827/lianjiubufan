import React, { Component } from 'react'
import SwitchUI from './SwitchUI'


class SwitchContainer extends Component {
  constructor(props) {
    super(props)
    this.id = 'z' + Math.round(Math.random() * 10000)
    this.state = {
      isChecked: false
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.checked

    this.setState({
      isChecked: value
    }, z => this.props.handleChange(this.state))
  }

  componentDidMount() {
    this.setState({
      isChecked: this.props.defaultChecked
    })
  }

  render() {
    return <SwitchUI {...this.props} id={this.id} handleInputChange={this.handleInputChange.bind(this)} checked={this.state.isChecked} />
  }
}

export default SwitchContainer
