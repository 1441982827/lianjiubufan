import React from 'react'
import {BtnListItem,MyList,FlexBox} from './styledStep'
import {Button } from 'ui/button/'

const dayList = [
    {
        checked:false,
        day:"周一",
        id:"001"
    },
    {
        checked:false,
        day:"周二",
        id:"002"
    },
    {
        checked:false,
        day:"周三",
        id:"003"
    },
    {
        checked:true,
        day:"周四",
        id:"004"
    },
    {
        checked:false,
        day:"周五",
        id:"005"
    },
    {
        checked:false,
        day:"周六",
        id:"006"
    },
    {
        checked:false,
        day:"周日",
        id:"007"
    }

]

class ChooseDay extends React.Component{
    state={
        chooseDay:"周一"
    }

      render(){
          return <div>
              <MyList>
                  {
                      dayList.map((value,index)=>{
                        return <BtnListItem key={value.id} onClick={()=>this.handleClickDayList(value.day,index)} className={value.day === this.state.chooseDay ? "checked" : ""}>{value.day}</BtnListItem>
                      })
                  }
              </MyList>
              <FlexBox>
                  <Button width={200} height="40" bindClick={()=> this.handleClickGoNext()}>下一步</Button>
              </FlexBox>
          </div>
      }
      handleClickDayList(day){
        this.setState({
            chooseDay:day
        })
      }
      handleClickGoNext(){
        let {history ,location} = this.props
        history.push(`/plan/add/setting/sportstep03${location.search}&planweek=${this.state.chooseDay}`)
      }
}

export default ChooseDay