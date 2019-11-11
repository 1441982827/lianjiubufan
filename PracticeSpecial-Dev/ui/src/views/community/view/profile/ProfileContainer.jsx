import React, { Component } from 'react'

import { NavBar } from 'antd-mobile'
import {Icon} from 'ui/icon'
import { ProContainer,ContentContainer,HeaderDiv,SpanCity } from './StyledProfile'
import { BackgroundContainer } from 'community/components/background/'
import { Button } from 'ui/button'
import { PopularContainer } from 'community/components/popular/'
import ProfileUI from './ProfileUI'

import bg from 'images/community/bgHeader1.png' 
import userHeader from 'images/community/user.png'

export default class ProfileContainer extends Component {
  render() {
    let popular = {
      '关注':77,
      '粉丝':20,
      '获赞':150
    }
    return (
      <ProContainer>
        <NavBar
          icon={<Icon type="left" width=".1rem" height=".17rem" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={[
            <Icon key="0" type="mail_2x" width=".25rem" height=".23rem" onClick={this.handlerMsgClick}/>,
          ]}
        ></NavBar>
        <BackgroundContainer img={bg}>        
          <HeaderDiv>
            <div>
              <img src={userHeader} alt="" />
              <h3>PYTlxy</h3>
            </div>
            <div>
              <Button width={69} height={23} bg={"gradual"} fontSize={10} >修改资料</Button>
              <Button width={23} height={23} bg={"gradual"} fontSize={12}>
                <Icon type="qrcode_2x" width='.1rem' height='.1rem' onClick={this.handlerClick}/>
              </Button>
            </div>
          </HeaderDiv>
          <ContentContainer
            color="#E6E6E6"
          >
            从锻炼角度看，躺着不如坐着，坐着不如站着，站着不如走着
          </ContentContainer>
          <SpanCity><i>女</i>|<i>北京</i></SpanCity>
          <PopularContainer popular={popular}></PopularContainer>
        </BackgroundContainer>
        <ProfileUI></ProfileUI>
      </ProContainer>
    )
  }

  handlerClick = ()=>{
    this.props.history.push('/community/qrcode')
  }
  handlerMsgClick = ()=>{
    this.props.history.push('/community/message')
  }
}
