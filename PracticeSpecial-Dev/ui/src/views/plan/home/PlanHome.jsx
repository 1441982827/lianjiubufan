import React from 'react'

import {indexStyled} from '../index/'
import {Tabbar} from 'ui/tabbar/'
import {Styled , EveryDayDone ,Calerio ,Charts } from './views/'

class PlanHome extends React.Component{
      render(){
          let {Container } = indexStyled;
          return (
            <indexStyled.WhiteBgContainer>
                <Container>
                    <Styled.Title>计划</Styled.Title>
                    <Styled.Space height="20"></Styled.Space>
                    <Styled.Subtitle>每日计划完成量</Styled.Subtitle>
                </Container>
                <EveryDayDone></EveryDayDone>

                <Calerio>
                    <Container>
                        <Charts></Charts>
                        <Styled.CoverCard>
                        <Container>
                            <Styled.Subtitle>卡路里折线图</Styled.Subtitle>
                        </Container>
                        </Styled.CoverCard>
                    </Container>
                </Calerio>

                <Container>
                    <Styled.Subtitle>计划列表</Styled.Subtitle>
                </Container>
                 <Styled.BgCard1 onClick={()=>this.changePath("/plan/detail")}>
                     <div className="gonext ">查看计划</div>
                 </Styled.BgCard1>

                 <Container>
                    <Styled.Subtitle>训练计划</Styled.Subtitle>
                </Container>
                 <Styled.BgCard2 onClick={()=>this.changePath("/plan/add")}>
                        <div className="gonext ">添加计划</div>
                 </Styled.BgCard2>
                 <Styled.Space height="80"></Styled.Space>
                <Tabbar></Tabbar>
            </indexStyled.WhiteBgContainer>
          )
      }
      changePath(p){
        let {history} = this.props
        history.push(p)
      }
}

export default PlanHome