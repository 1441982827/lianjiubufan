import React, { Component } from 'react'

import FastPINUI from './FastPINUI'

import http from 'utils/http/'

class FastPINContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: ''
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleChange4 = this.handleChange4.bind(this)
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

  handleChange3(event) {
    this.setState({
      value3: event.target.value
    })
  }

  handleChange4(event) {
    this.setState({
      value4: event.target.value
    })
  }

  async handleClick() {
    const result = (await http.post({
      url: `/api/user/register?tel=${this.props.location.state}&cat=${this.state.value1}${this.state.value2}${this.state.value3}${this.state.value4}&stateCode=1`
    })).ret
    if (result) this.props.history.push('/login/pw')
    else alert('请输入正确的验证码')
  }

  render() {
    return <FastPINUI
      value1={this.state.value1}
      value2={this.state.value2}
      value3={this.state.value3}
      value4={this.state.value4}
      handleChange1={this.handleChange1}
      handleChange2={this.handleChange2}
      handleChange3={this.handleChange3}
      handleChange4={this.handleChange4}
      handleClick={this.handleClick}
    />
  }
}

export default FastPINContainer
