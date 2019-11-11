import React, { Component } from 'react'

import { AnimateContainer } from './StyledAnimate'
import { Button } from 'ui/button/'

export default class Animate extends Component {
  render() {
    return (
      <AnimateContainer>
        <div>
          <img src={this.props.user1Header} alt="" />
          <span>PYTlxy</span>
          <Button
            width="57"
            height="23"
            fontSize="10"
            bg="gradual"
          >关注</Button>
        </div>
        <p>哪有什么天生如此，只是我们每天坚持</p>
        <img src={this.props.animate1} alt="" />
        <span>14小时前</span>
      </AnimateContainer>
    )
  }
}
