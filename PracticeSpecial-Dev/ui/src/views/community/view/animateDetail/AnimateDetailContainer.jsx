import React, { Component } from 'react'

import  AnimateDetailUI  from './AnimateDetailUI'
import { ContainerX } from 'layout/container';
import {Icon} from 'ui/icon'
import {Header} from 'ui/header'
import { FooterComment } from './components/comment/'

export default class AnimateDetailContainer extends Component {
  render() {
    return (     
        <ContainerX
          obg='true'
          bg="#fff"
          padding="0rem "
          oheight='100%'
          height='calc(100% - .45rem)'
          scrolly='true'
          flex='true'
          header={
            <Header
            leftContent="运动详情"
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
            >
            </Header>
          }
          footer={
            <FooterComment></FooterComment>
          }
        >
          <AnimateDetailUI></AnimateDetailUI>          
        </ContainerX>        
    )
  }
}
