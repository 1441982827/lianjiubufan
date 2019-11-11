import React from 'react'

import FastLogin from './StyledFastLogin'

import LoginInput from '../../components/login_input'
import LoginButton from '../../components/login_button'
import ToggleButton from '../../components/toggle_button'

const FastLoginUI = props => {
  return (
    <FastLogin>
      <LoginInput type="text" placeholder="请输入手机号码" {...props} />
      <LoginButton handleClick={props.handleClick}>获取验证码</LoginButton>
      <div>未注册手机验证后自动登录</div>
      <ToggleButton to="/login/pw">密码登录</ToggleButton>
    </FastLogin>
  )
}

export default FastLoginUI
