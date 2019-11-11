import React from 'react'

import FastPIN from './StyledFastPIN'

import BackButton from '../../components/back_button/'
import PIN from '../../components/pin/'
import LoginButton from '../../components/login_button/'
import ToggleButton from '../../components/toggle_button'

export default props => {
  return (
    <FastPIN>
      <BackButton />
      <PIN {...props} />
      <LoginButton handleClick={props.handleClick}>登录</LoginButton>
      <ToggleButton to="/login/fastpin">重发短信验证码</ToggleButton>
    </FastPIN>
  )
}