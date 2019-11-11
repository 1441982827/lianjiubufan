import React, { Component } from 'react'
import{CalendarStyled} from './StyledCalendar'
import {getTime} from 'utils/time/'

let {d,W} = getTime()
let day =getTime().toString("M/Y",true)

 class Calendar extends Component {

    render() {
        return (
            <CalendarStyled>
                <div className="calendar">
                <div className="header">
                    <div className="day">
                   {d} 
                    </div>
        
                    <div className="detail">
                        <div className="week">
                       星期{W}
                        </div>
                        <div className="month">
                        {day}
                        </div>
                    </div>
                </div>
                <div className="footer">
                    { this.props.desc }
                </div>
                </div>
            </CalendarStyled>
        )
    }

   
}

export default Calendar