import React from 'react'

import RemindSetting from './StyledRemindSetting'

import { Header } from 'ui/header/'
import { Icon } from 'ui/icon/'
import Switch from 'ui/switch/'

import Shadow from '../../components/shadow/'
import Between from '../../components/between/'

export default props => {
  return (
    <RemindSetting>
      <Header
        leftContent="消息与提醒"
        icon={<Icon width='0.1rem' height="0.18rem" type="left" onClick={z => props.history.goBack()} />}
        leftStyled='flex:2'
      />
      <Shadow height="100%" radius="0" padding="0.2rem 0.15rem">
        <Shadow>
          <Between>
            <div>评论</div>
            <Switch defaultChecked={true} handleChange={props.handleChange} />
          </Between>
        </Shadow>
        <Shadow>
          <Between>
            <div>粉丝</div>
            <Switch defaultChecked={false} handleChange={props.handleChange} />
          </Between>
        </Shadow>
        <Shadow>
          <Between>
            <div>系统通知</div>
            <Switch defaultChecked={false} handleChange={props.handleChange} />
          </Between>
        </Shadow>
        <Shadow>
          <Between>
            <div>消息</div>
            <Switch defaultChecked={true} handleChange={props.handleChange} />
          </Between>
        </Shadow>
      </Shadow>
    </RemindSetting>
  )
}
