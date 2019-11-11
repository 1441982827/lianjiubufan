import React, { Component } from 'react'
import { ContainerX } from 'layout/container'
import { Icon } from 'ui/icon'
import { Header } from 'ui/header'

import { TextContainer,PhotoContainer,DivWrapper,PositionContainer } from './StyledShare'

export default class ShareContainer extends Component {
  render() {
    return (
      <ContainerX
        obg='true'
        bg="#fff"
        padding="0rem .15rem"
        oheight='100%'
        height='6.38rem'
        scrolly='true'
      //  flex='true'
        header={
          <Header
            leftContent="运动"
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
            rightContent={<Icon type="fly_active_2x" width=".19rem" height=".19rem"></Icon>}
          >
          </Header>
        }
      >
        <DivWrapper>
          <TextContainer  placeholder="分享你的健身经验和心得吧"></TextContainer>
          <PhotoContainer>
            <Icon type='plus_2x' width='.3rem' height='.3rem'></Icon>
          </PhotoContainer>
        </DivWrapper>
        <PositionContainer onClick={()=>this.handlerClick('/community/three/position')}>
          <Icon type='position_2x' width='.1rem' height='.12rem'/>
          <i>你在哪里</i>
          <Icon type='right' width='.11rem'/>
        </PositionContainer>
      </ContainerX>
    )
  }
  handlerClick = (path)=>{
    this.props.history.push(path)
  }
}
