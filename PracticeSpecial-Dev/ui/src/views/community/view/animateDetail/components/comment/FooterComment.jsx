import React, { Component } from 'react'

import { FooterContainer } from './StyledComment'
import {Icon} from 'ui/icon'
import write from 'images/community/write.png'
export default class FooterComment extends Component {
  render() {
    return (
      <FooterContainer>
        <div>         
          <Icon 
            img={write}
            width='.12rem'
            height='.12rem'
          ></Icon>
          <p>说点什么吧</p>
        </div>
        <ul>
          <li>
            <Icon type='love_2x'
              width='.21rem'
              height='.19rem'
            ></Icon>
            <i>50</i>
          </li>
          <li>
            <Icon type='favorite_2x'
              width='.21rem'
              height='.21rem'
            ></Icon>
            <i>2</i>
          </li>
          <li>
            <Icon type='message_2x'
              width='.21rem'
              height='.21rem'
            ></Icon>
            <i>5</i>
          </li>
        </ul>
      </FooterContainer>
    )
  }
}
