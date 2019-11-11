import React from 'react'

import LoginInput from './StyledLoginInput'

const LoginInputUI =  props => <LoginInput
  type={props.type}
  placeholder={props.placeholder}
  value={props.value}
  onChange={props.handleChange}
/>

export default LoginInputUI