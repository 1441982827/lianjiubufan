import React from 'react'

import ChangePW from './StyledChangePW'

import { Header } from 'ui/header'
import { Icon } from 'ui/icon'
import { Button } from 'ui/button'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

export default props => {
  return (
    <ChangePW>
      <Header
        leftContent='账号与安全'
        icon={<Icon width='0.1rem' height='0.18rem' type='left' onClick={z => props.history.goBack()} />}
        leftStyled='flex:2'
      />
      <div className='pw_inner'>
        <div>
          <Shadow>
            <Between>
              <div>
                <p>手机号</p>
                <i>12345678901</i>
              </div>
              <Button width='86' bg='gradual' height='24' fontSize='13'>更改密码</Button>
            </Between>
          </Shadow>
          <Shadow>
            <Between padding='0.12rem 0'>
              <p>设置密码</p>
              <Icon width='0.1rem' height='0.18rem' type='right_black' />
            </Between>
          </Shadow>
        </div>
        <Button width='310' bg='gradual' height='40' fontSize='17' customStyle='margin-left: 0.15rem;'>退出</Button>
      </div>
    </ChangePW>
  )
}
