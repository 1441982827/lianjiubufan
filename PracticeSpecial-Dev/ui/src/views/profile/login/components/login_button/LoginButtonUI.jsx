import React from 'react'

import LoginButton from './StyledLoginButton'

const LoginButtonUI = props => <LoginButton onClick={props.handleClick}>{props.children}</LoginButton>

export default LoginButtonUI