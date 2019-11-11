import React from 'react'
import { TabbarContainer ,Suspend,BottomBtn } from './StyledTabbar'
import TabbarUI from './TabbarUI'

import plan from 'images/tabbar/2xplan.png'
import planActive from 'images/tabbar/2xplan-active.png'
import community from 'images/tabbar/2xcommunity.png'
import communityActive from 'images/tabbar/2xcommunity-active.png'
import sport from 'images/tabbar/2xsport.png'
import sportActive from 'images/tabbar/2xsport-active.png'
import article from 'images/tabbar/2xarticle.png'
import articleActive from 'images/tabbar/2xarticle-active.png'
import profile from 'images/tabbar/2xprofile.png'
import profileActive from 'images/tabbar/2xprofile-active.png'
import{Focus} from 'sport/';

const navList = [
    {
        icon:plan,
        iconActive:planActive,
        title:"计划",
        className:"icon",
        routelink:'/plan'
    },
    {
        icon:community,
        iconActive:communityActive,
        title:"社区",
        className:"icon",
        routelink:'/community'
    },
    {
        icon:sport,
        iconActive:sportActive,
        title:"",
        className:"sport",
        routelink:''
    },
    {
        icon:article,
        iconActive:articleActive,
        title:"文章",
        className:"icon",
        routelink:'/article'
    },
    {
        icon:profile,
        iconActive:profileActive,
        title:"我",
        className:"icon",
        routelink:'/profile'
    }

]

class Tabbar extends React.Component{
        state = {
            isShowSuspend : false
        }
        render(){
            return (
                <>
                    <TabbarContainer>
                        <TabbarUI isShowSuspend={this.state.isShowSuspend} list={navList} onSportDisplay={this.sportDisplay}></TabbarUI>
                    </TabbarContainer>
                    <Suspend display={this.state.isShowSuspend ? "block" : "none"}>
                    <Focus></Focus>
                        {this.props.children}
                        <BottomBtn>
                            <div className='exitBtn' onClick={this.sportDisplay}></div>
                        </BottomBtn>
                    </Suspend>
                </>
            )
        }
        sportDisplay = ()=>{
            this.setState({
                isShowSuspend:!this.state.isShowSuspend
            })
        }
}

export default Tabbar