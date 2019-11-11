import React, { Component } from 'react'

import AlertUI from './AlertUI'

import { ContainerX } from 'layout/container/'
import { Header } from 'ui/header/'
import { Icon } from 'ui/icon/'

export default class AlertContainer extends Component {
  render() {
    return (
      <ContainerX
        obg='true'
        bg="#fff"
        padding="0rem .15rem"
        oheight='100%'
        height='6.38rem'
        scrolly='true'
        flex='true'
        header={
          <Header
            leftContent="消息提醒"
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
          >
          </Header>
        }
      >
        <AlertUI>
          
        </AlertUI>
      </ContainerX>
    )
  }
}
