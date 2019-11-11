import React, { Component } from 'react'

import { Header } from 'ui/header'
import { ContainerX } from 'layout/container'
import { Icon } from 'ui/icon'

import { UlContainer,List } from './StyledPosition'

export default class Position extends Component {
  render() {
    return (
      <ContainerX
        obg='true'
        bg="#fff"
        padding="0rem"
        oheight='100%'
        height='6.38rem'
        scrolly='true'
      //  flex='true'
        header={
          <Header
          leftContent="所在位置"
          onLeftClick={() => this.props.history.goBack()}
          icon={<Icon type='left' width='.11rem'></Icon>}
          >
          </Header>
        }
      >
        <UlContainer>
          <List>
            <div>
              <p>福田公司总部大厦</p> 
              <span>北京市昌平区沙阳路</span>
            </div>
            <Icon type='left' width='.11rem'></Icon>
          </List>
        </UlContainer>     
      </ContainerX>
    )
  }
}
