import React, { Component } from 'react'

import { OthersAnimateUI } from './OthersAnimateUI'

import {Icon} from 'ui/icon'
import {Header} from 'ui/header'
import userHeader from 'images/community/user.png'

 class OthersAnimateContainer extends Component {
  render() {
    return (
      <OthersAnimateUI>
        <Header
          leftContent="PYTlxy"
          icon={<Icon width='.11rem' ></Icon>}
          rightContent={<Icon type="share_2x" ></Icon>}
        > 
          <img src={userHeader} alt=""></img>
        </Header>

      </OthersAnimateUI>
    )
  }
}

export {
  OthersAnimateContainer
}
