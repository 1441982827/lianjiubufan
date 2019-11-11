import React, { Component } from 'react'

import  CollectionUI from './CollectionUI'

import { ContainerX } from 'layout/container/'
import { Header } from 'ui/header/'
import { Icon } from 'ui/icon/'

export default class Collection extends Component {
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
            leftContent="收藏"
            icon={<Icon type='left' width='.11rem'></Icon>}
          >
          </Header>
        }
      >
        <CollectionUI></CollectionUI>
      </ContainerX>
    )
  }
}
