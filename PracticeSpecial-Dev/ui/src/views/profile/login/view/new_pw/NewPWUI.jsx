import React from 'react'

import NewPW from './StyledNewPW'

import BackButton from '../../components/back_button'
import LoginInput from '../../components/login_input/'
import LoginButton from '../../components/login_button/'

export default props => {
  const {value1, value2, handleChange1, handleChange2, handleClick} = props
  return (
    <NewPW>
      <BackButton />
      <LoginInput
        type="password"
        placeholder="请输入新密码"
        value={value1}
        handleChange={handleChange1}
      />
      <LoginInput
        type="password"
        placeholder="再次确认"
        value={value2}
        handleChange={handleChange2}
      />
      <LoginButton handleClick={handleClick}>确认</LoginButton>
    </NewPW>
  )
}