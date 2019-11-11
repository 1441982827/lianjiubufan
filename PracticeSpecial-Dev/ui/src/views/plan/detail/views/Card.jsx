import React from 'react'
import * as Styled from './styleddetail'

class Card extends React.Component{
      render(){
            let {height} = this.props
            return (
                  <Styled.Card height={height ? this.props.height :"100"} done={this.props.done}>
                        <div className="progress"></div>
                        <div className="plan-title">
                              <p>{this.props.title}</p>
                              <span className={this.props.isDone ? "done" :"doing"}>
                                    {this.props.isDone ? "已完成" :"未完成"}
                              </span>
                        </div>
                        <div className="plan-time">
                              <p>{this.props.time}分钟</p>
                        </div>
                  </Styled.Card>
            )
      }
}

export default Card