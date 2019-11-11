import React from 'react'
import {indexStyled} from '../index/'
import {Header} from 'ui/header'
import {Icon} from 'ui/icon'
import axios from 'axios'
import _ from 'loadsh'
import {Card , DatePicker} from './views/'

class PlanDetail extends React.PureComponent{

        state ={
            planList:{},
            dayPlanList:[]
        }
      render(){
        let {Container , WhiteBgContainer , ColorBgContainer } = indexStyled;
        return (
                <ColorBgContainer  scroll="hidden">
                    <Header
                    leftContent="查看计划"
                    icon={<Icon width='.11rem' type="left" ></Icon>}
                    onLeftClick={() => this.handleGoBack()}
                    ></Header>
                    <WhiteBgContainer>
                        <Container>
                            <DatePicker onChangeDay={(w)=>this.changeDay(w)}></DatePicker>
                            {

                              this.state.dayPlanList.map((value,index)=>{
                                return (
                                  <Card 
                                  height="80" 
                                  title={value.planname}
                                  time={parseInt((value.pstimetwo-value.pstimeone)/60000)}
                                  done={value.psfrequency}
                                  isDone={false}
                                  key={value.pstimeone + ''+index}
                                  ></Card>
                                )
                              })
                            }

                        </Container>
                    </WhiteBgContainer>
                </ColorBgContainer>
             
        )
      }
      handleGoBack(){
          this.props.history.goBack()
      }

      changeDay(week){
        this.setState({
            dayPlanList:this.state.planList[week]?this.state.planList[week]:[]
        })
      }

      async componentDidMount(){
        let result = await axios.get('/api/plan/ask?pluserid=3')
        let list = result.data.data

        this.setState({
            planList:_.groupBy(list,'planweek')
        })
        this.setState({
          dayPlanList:this.state.planList['周四']?this.state.planList['周四']:[]
        })
      }
}

export default PlanDetail