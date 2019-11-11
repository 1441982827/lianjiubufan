import React, { Component } from 'react'

import QRCode from 'qrcode'
import { ContainerX } from 'layout/container/'
import { Header } from 'ui/header/'
import { Icon } from 'ui/icon/'


import { QrcodeContainer } from './StyledQrcode'

export default class Qrcode extends Component {
  state = {
    src:''
  }
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
            leftContent="我的二维码 "
            leftStyled='flex:2.4'               
            onLeftClick={() => this.props.history.goBack()}
            icon={<Icon type='left' width='.11rem'></Icon>}
            rightContent={<Icon type="scan_2x" width='.19rem' height='.19rem' onClick={this.handerClick}></Icon>}
          >
          </Header>
        }
      >
        <QrcodeContainer id="canvas">
          <img src={this.state.src} alt="" />
        </QrcodeContainer>
      </ContainerX>
    )
  }
  handerClick = ()=>{
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
        window.wx.scanQRCode({
          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
          success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            alert(result)
            console.log(1)
          }  
        })
      })
    })
    
  }
  componentDidMount(){
    QRCode.toDataURL('https://xuxuxu.club/community/profile/')
    .then(url => {
      this.setState({
        src : url
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
}
