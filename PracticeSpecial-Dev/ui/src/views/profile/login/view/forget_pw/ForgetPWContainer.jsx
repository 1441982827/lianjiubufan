import React, { Component } from 'react'

import ForgetPWUI from './ForgetPWUI'

import http from 'utils/http/'

class ForgetPWContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  async handleClick() {
    const result = (await http.get({
      url: `/api/user/code?tel=${this.state.value}`
    })).ret
    if (result) this.props.history.push({
      pathname: '/login/forgetpin',
      state: this.state.value
    })
    else alert('请输入正确的手机号')
  }

  render() {
    return <ForgetPWUI 
      handleClick={this.handleClick}
      value={this.state.value}
      handleChange={this.handleChange}
    />
  }
}

export default ForgetPWContainer
