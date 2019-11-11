import React from 'react'

import ForgetPW from './StyledForgetPW'

import BackButton from '../../components/back_button/'
import LoginInput from '../../components/login_input/'
import LoginButton from '../../components/login_button/'

const ForgetPWUI = props => {
  return (
    <ForgetPW>
      <BackButton />
      <LoginInput type="text" placeholder="请输入手机号码" {...props} />
      <LoginButton handleClick={props.handleClick}>下一步</LoginButton>
    </ForgetPW>
  )
}

export default ForgetPWUI
