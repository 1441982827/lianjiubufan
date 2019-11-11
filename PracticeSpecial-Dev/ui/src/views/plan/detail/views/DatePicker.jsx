import React  from 'react'
import {DateContainer} from './styleddetail'


const datelist = [
    {
        day:"一",
        date:"21"
    },
    {
        day:"二",
        date:"22"
    },
    {
        day:"三",
        date:"23"
    },
    {
        day:"四",
        date:"24"
    },
    {
        day:"五",
        date:"25"
    },
    {
        day:"六",
        date:"26"
    },
    {
        day:"日",
        date:"27"
    }
]

class DatePicker extends React.Component{
      state={
          nowIndex:3
      }
      render(){
          return <DateContainer child={datelist.length}>
              <ul>
                  {
                      datelist.map((value,index)=>{
                          return <li key={value.day+value.date} onClick={()=> this.handleClick(index,value.day)} className={this.state.nowIndex === index?"active" : ""}>
                              <span>{value.day}</span>
                            <p>{value.date}</p>
                          </li>
                      })
                  }
              </ul>
          </DateContainer>
      }
      handleClick(index,day){
        this.setState({
            nowIndex:index
        })
        this.props.onChangeDay("周"+day)
      }
}

export default DatePicker