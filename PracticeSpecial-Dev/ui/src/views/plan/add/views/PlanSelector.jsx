import React from 'react'
import AddPlanCard from './AddPlanCard'
import {indexStyled} from '../../index/'
import {getTime} from 'utils/time/index'
 
class PlanSelector extends React.Component{
      render(){
        let { WhiteBgContainer} = indexStyled;
          return <WhiteBgContainer>
                <AddPlanCard
                bgurl='https://www.xuxuxu.club/static/images/plan/detail/sportplan.png'
                btn='运动计划'
                gopath="/addsport"
                onClickbtn={()=> this.handleClick()}
                ></AddPlanCard>
                <AddPlanCard
                bgurl='https://www.xuxuxu.club/static/images/plan/detail/walkplan.png'
                btn='徒步计划'
                gopath="/static/addwalk"
                onClickbtn={()=> this.handleClickGoStep3(1,"徒步计划")}
                ></AddPlanCard>
                <AddPlanCard
                bgurl='https://www.xuxuxu.club/static/images/plan/detail/bikeplan.png'
                btn='骑行计划'
                gopath="/addbike"
                onClickbtn={()=> this.handleClickGoStep3(2,"骑行计划")}
                ></AddPlanCard>
                <AddPlanCard
                bgurl='https://www.xuxuxu.club/static/images/plan/detail/runplan.png'
                btn='跑步计划'
                gopath="/addrun"
                onClickbtn={()=> this.handleClickGoStep3(3,"跑步计划")}
                ></AddPlanCard>
          </WhiteBgContainer>
      }

    handleClick(){
        let {history} = this.props
        history.push("/plan/add/setting")
    }

    handleClickGoStep3(id,name){
      let day = getTime().toString("W",true)
      let {history} = this.props
      history.push(`/plan/add/setting/sportstep03?plpartid=${id}&planname=${name}&planweek=周${day}`)
    }
}

export default PlanSelector