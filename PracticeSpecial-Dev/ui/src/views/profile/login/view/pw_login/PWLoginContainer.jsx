import React, { Component } from 'react'

import PWLoginUI from './PWLoginUI'

import http from 'utils/http/'

class PWLoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tel: '',
      pw: ''
    }
    this.changeTel = this.changeTel.bind(this)
    this.changePw = this.changePw.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  changeTel(event) {
    this.setState({
      tel: event.target.value
    })
  }

  changePw(event) {
    this.setState({
      pw: event.target.value
    })
  }

  async handleClick() {
    const result = (await http.post({
      url: `/api/user/login?tel=${this.state.tel}&pwd=${this.state.pw}`
    })).ret
    if (result) this.props.history.push('/plan')
    else alert('手机号或密码错误')
  }

  render() {
    return <PWLoginUI
      tel={this.state.tel}
      pw={this.state.pw}
      changeTel={this.changeTel}
      changePw={this.changePw}
      handleClick={this.handleClick}
    />
  }
}

export default PWLoginContainer
