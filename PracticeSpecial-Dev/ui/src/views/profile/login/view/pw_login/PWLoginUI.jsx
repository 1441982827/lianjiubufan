import React from 'react'

import PWLogin from './StyledPWLogin'

import LoginInput from '../../components/login_input'
import LoginButton from '../../components/login_button'
import ToggleButton from '../../components/toggle_button'

const PWLoginUI = props => {
  const {tel, pw, changeTel, changePw, handleClick} = props
  return (
    <PWLogin>
      <LoginInput
        type="text"
        placeholder="请输入手机号码"
        value={tel}
        handleChange={changeTel}
      />
      <LoginInput
        type="password"
        placeholder="请输入密码"
        value={pw}
        handleChange={changePw}
      />
      <LoginButton handleClick={handleClick}>登录</LoginButton>
      <div>
        <ToggleButton to="/login/fast">免密登录</ToggleButton>
        <ToggleButton to="/login/forget">忘记密码</ToggleButton>
      </div>
    </PWLogin>
  )
}

export default PWLoginUI
