import React from 'react'
import { NavLink } from 'react-router-dom'

import Settings from './StyledSettings'

import { Header } from 'ui/header'
import { Icon } from 'ui/icon'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

export default props => {
  return (
    <Settings>
      <Header
        leftContent="设置"
        icon={<Icon width='0.1rem' height="0.18rem" type="left" onClick={z => props.history.goBack()} />}
      />
      <div className="inner">
        <NavLink to={'/profile/pw'}>
          <Shadow>
            <Between>
              <span>账号管理</span>
              <Icon width=".1rem" height=".16rem" type="right_black" />
            </Between>
          </Shadow>
        </NavLink>
        <NavLink to={'/profile/data'}>
          <Shadow>
            <Between>
              <span>个人资料</span>
              <Icon width=".1rem" height=".16rem" type="right_black" />
            </Between>
          </Shadow>
        </NavLink>
        <Shadow>
          <span>清除缓存</span>
        </Shadow>
      </div>
    </Settings>
  )
}