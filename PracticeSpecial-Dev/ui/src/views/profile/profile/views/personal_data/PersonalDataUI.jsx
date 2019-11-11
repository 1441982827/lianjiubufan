import React from 'react'

import PersonalData from './StyledPersonalData'

import { Header } from 'ui/header'
import { Icon } from 'ui/icon'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

import avatar from 'images/profile/default_avatar.png'

export default props => {
  return (
    <PersonalData>
      <Header
        leftContent="个人资料"
        icon={<Icon width='0.1rem' height="0.18rem" type="left" onClick={z => props.history.goBack()} />}
        rightContent="保存"
      />
      <Shadow height="100%" radius="0" padding="0.2rem 0.15rem">
        <Shadow padding="0 0.15rem">
          <Between borderBottom="0.01rem solid #eee">
            <span>更换头像</span>
            <Icon width="0.73rem" height="0.73rem" img={avatar} margin="0.2rem 0" />
          </Between>
          <Between borderBottom="0.01rem solid #eee" padding="0.15rem 0">
            <span>昵称</span>
            <span>Blonde girl</span>
          </Between>
          <Between padding="0.15rem 0">
            <span>性别</span>
            <span>女</span>
          </Between>
        </Shadow>
        <Shadow>
          <Between borderBottom="0.01rem solid #eee" padding="0 0 0.15rem">
            <span>生日</span>
            <span>1999-01-08</span>
          </Between>
          <Between padding="0.15rem 0 0">
            <span>所在城市</span>
            <span>地球</span>
          </Between>
        </Shadow>
      </Shadow>
    </PersonalData>
  )
}
