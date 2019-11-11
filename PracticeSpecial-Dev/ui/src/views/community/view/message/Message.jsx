import React, { Component } from 'react'

import { ContainerX } from 'layout/container/'
import { Header } from 'ui/header/'
import { Icon } from 'ui/icon/'
import message from 'images/community/message.png'
import jinggao from 'images/community/jinggao.png'

import { MessageContainer } from './StyledMessage'
import  MessageListUI  from './MessageListUI'

export default class Message extends Component {

  componentDidMount(){

  }
  handlerClick(path){
    this.props.history.push(path)
  }

  render() {
    return (
      <ContainerX
        obg='true'
        bg="#fff"
        padding="0rem"
        oheight='100%'
        height='6.38rem'
        scrolly='true'
        flex='true'
        header={
          <Header
            leftContent="消息"
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
          >
          </Header>
        }
      >
        <MessageContainer>
          <ul>
            <li onClick={()=> this.handlerClick('/community/reply')}>
              <Icon img={message}
                width='.26rem'
                height='.25rem'
              ></Icon>
              <p>回复和@</p>
            </li> 
            <li onClick={()=> this.handlerClick('/community/alert')}> 
              <Icon img={jinggao}
                width='.22rem'
                height='.25rem'
              ></Icon>
              <p>消息提醒</p>
            </li>
          </ul>
          <div></div>
        </MessageContainer> 
        <MessageListUI></MessageListUI>
      </ContainerX>
    )
  }
}
