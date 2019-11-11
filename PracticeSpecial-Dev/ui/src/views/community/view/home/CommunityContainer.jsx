import React, { Component } from 'react'

import CommunityUI from './CommunityUI'

import {
  CommunityContainer,
  DivWrapper,
  Header,
  Main,
  UserDiv
} from './StyledCommunity'

import { Icon } from 'ui/icon'
import { Popover } from 'antd-mobile'
import {Tabbar} from 'ui/tabbar/'

import add from 'images/community/add.png'
import bgHeader1 from 'images/community/bgHeader1.png'
import userHeader from 'images/community/user.png'

export default class Community extends Component {
  render() {
    const Item = Popover.Item
    return (
      <CommunityContainer>   
        <DivWrapper>
          <Header bgHeader={bgHeader1}> 
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              overlay={[
                (<Item key="4" value="adduser"  data-seed="logId" style={{ whiteSpace: 'nowrap'}} >添加好友</Item>),
                (<Item key="5" value="search"  style={{ whiteSpace: 'nowrap' }}>扫一扫</Item>),
                (<Item key="6" value="share"  style={{ whiteSpace: 'nowrap' }}>发表动态</Item>)          
              ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, 0],
              }}  
              onSelect={this.onSelect}      
            >
              <div style={{
                padding: '0 .15rem',
                marginRight: '-.15rem',
                position:'absolute',
                top:'.6rem',
                right:'.3rem',
                alignItems: 'center',
              }}
              >
                <Icon img={add}  width=".17rem" height=".17rem" ></Icon>
              </div>
            </Popover>
          </Header>
          <Main>
            <UserDiv 
              onClick={(path)=>this.handlerClick('profile')}
            > 
              <img src={userHeader} alt=""/>
              <span>Jasmine</span>
            </UserDiv>
            <CommunityUI
              onShare={this.onShare}
              handlerClick={()=>this.handlerClick('others')}
              detailClick={()=>this.handlerClick('animatedetail')}
            ></CommunityUI>
          </Main>   
        <Tabbar></Tabbar>    
      </DivWrapper>      
    </CommunityContainer>

        
    )
  }
  
  onSelect = (opt) => {
    let { value } = opt.props
    switch(value){
      case 'adduser':
        this.props.history.push('/community/adduser')
        break
      case 'search':    
        break
      default:
          this.props.history.push('/community/three/share')
    }
  }
  onShare = ()=>{
    this.props.history.push('/community/three/share')
  }
  handlerClick = (path)=>{
    this.props.history.push(`/community/${path}`)
  }

}
