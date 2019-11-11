import React, { Component } from 'react'

import  SeeOthersUI  from './SeeOthersUI'
import { NavBar } from 'antd-mobile'
import {Icon} from 'ui/icon'
import { ProContainer,ContentContainer,HeaderDiv,SpanCity } from '../profile/StyledProfile'
import { BackgroundContainer } from 'community/components/background/'
import { Button } from 'ui/button'
import { PopularContainer } from 'community/components/popular/'

import bg from '../others/images/bg.png' 
import user1Header from 'images/community/user1.png'

class SeeOthers extends Component {
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
            <Icon key="0" type="camera_2x" width=".2rem" height=".17rem" />,
          ]}
        ></NavBar>
        <BackgroundContainer img={bg}>        
          <HeaderDiv>
            <div>
              <img src={user1Header} alt="" />
              <h3>PYTlxy</h3>
            </div>
            <div>
              <Button width={48} height={23} bg={"white"} fontSize={12} color={"#272727"}>消息</Button>
              <Button width={69} height={23} bg={"gradual"} fontSize={12}>关注</Button>
            </div>
          </HeaderDiv>
          <ContentContainer
            color="#E6E6E6"
          >
            从锻炼角度看，躺着不如坐着，坐着不如站着，站着不如走着
          </ContentContainer>
          <SpanCity><i>男</i>|<i>北京</i></SpanCity>
          <PopularContainer popular={popular}></PopularContainer>
        </BackgroundContainer>
        <SeeOthersUI></SeeOthersUI>
      </ProContainer>
          
          
       
     
    )
  }
}

export default SeeOthers