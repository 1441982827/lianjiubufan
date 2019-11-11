import React from 'react'

import ForgetPWPIN from './StyledForgetPWPIN'

import BackButton from '../../components/back_button/'
import PIN from '../../components/pin/'
import LoginButton from '../../components/login_button/'
import ToggleButton from '../../components/toggle_button/'

export default props => {
  return (
    <ForgetPWPIN>
      <BackButton />
      <PIN {...props} />
      <LoginButton handleClick={props.handleClick}>下一步</LoginButton>
      <ToggleButton to="/login/forgetpin">重发短信验证码</ToggleButton>
    </ForgetPWPIN>
  )
}