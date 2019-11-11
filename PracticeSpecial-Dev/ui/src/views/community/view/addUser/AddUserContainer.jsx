import React, { Component } from 'react'

import { SearchContainer } from './StyledAddUser'
import { ContainerX } from 'layout/container'
import { Icon } from 'ui/icon'
import { Header } from 'ui/header/'

import UserListUI from './UserListUI'

export default class AddUserContainer extends Component {
  render() {
    return (
      <ContainerX
        obg='true'
        bg="#fff"
        padding="0 .15rem"
        oheight='100%'
        height='calc(100% - .45rem)'
        scrolly='true'
        flex='true'
        header={
          <Header
            leftContent="添加好友"
            onLeftClick={() => this.handleGoBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
            rightContent={<Icon type='scan_2x' width=".18rem" onClickCapture={this.handerClick}></Icon>}
          >
          </Header>
        }
      >
        <SearchContainer>
          <input placeholder='大家都在搜「 查找用户」'/>
          <Icon type='search_2x' width='.13rem' height='.135rem'></Icon>
        </SearchContainer>
        <UserListUI>
          {this.props.children}
        </UserListUI>
      </ContainerX>
    )
  }
  handleGoBack = ()=>{
    this.props.history.goBack()
  }

  handerClick = ()=>{
    // console.log(1)
    window.wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        alert(result)
      }
    })
  }

  componentDidMount(){
    fetch('https://xuxuxu.club/server/community/jssdk')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      window.wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        ...result,
        jsApiList: ['scanQRCode', 'getLocation', 'openLocation'] // 必填，需要使用的JS接口列表
      })
      window.wx.ready(()=>{
        this.handerClick()
      })
    })
  }
}
