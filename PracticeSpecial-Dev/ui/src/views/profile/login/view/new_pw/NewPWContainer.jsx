import React, { Component } from 'react'

import NewPWUI from './NewPWUI'

import http from 'utils/http/'

class NewPWContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: '',
      value2: ''
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange1(event) {
    this.setState({
      value1: event.target.value
    })
  }

  handleChange2(event) {
    this.setState({
      value2: event.target.value
    })
  }

  async handleClick() {
    if (this.state.value1 === this.state.value2 && this.state.value1 && this.state.value2) {
      const result = (await http.post({
        url: `/api/user/reset?tel=${this.props.location.state}&newpwd=${this.state.value1}`
      })).ret
      if (result) this.props.history.push('/plan')
      else alert('两次密码不一致')
    }
  }

  render() {
    return <NewPWUI
      value1={this.state.value1}
      value2={this.state.value2}
      handleChange1={this.handleChange1}
      handleChange2={this.handleChange2}
      handleClick={this.handleClick}
    />
  }
}

export default NewPWContainer