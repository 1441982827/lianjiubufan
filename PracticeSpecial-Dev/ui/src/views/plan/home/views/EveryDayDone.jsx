import React from 'react'
import * as Styled from './styledHome'
import http from 'utils/http/index'


class EveryDayDone extends React.Component{
      state={
        dailyList:[],
        ballType:['normalBall','leftBall','centerBall','rightBall','normalBall'],
      }
      render(){
          let {Card1,BallBar,BallBox} = Styled
          return (
            <Card1>
              <BallBar>
                {
                  this.state.dailyList.map((value,index)=>{
                    return <BallBox 
                            key={value.spdata} 
                            type={parseInt(value.achievepercent)} 
                            className={this.state.ballType[index]?this.state.ballType[index]:"normalBall"}>
                            {value.achievepercent} 
                              <p>{new Date(value.spdata).getMonth() +1}.{new Date(value.spdata).getDate()}</p>
                            </BallBox>
                  })
                }
              </BallBar>
            </Card1>
          )
      }

      async componentDidMount(){
        let result = await http.get({url:"/api/plan/progress?spuserid=8"})
        let newlist = this.fullDataList(result.data)
        if(result.ret){
          this.setState({
            dailyList:newlist
          })
        }
      }

      fullDataList(list){
        let s = 5 - list.length
        let d = new Date().getDate()
        for(let i = 0 ; i < s ; i ++){
          list.push({
            achievepercent:"0%",
            spdata:new Date().setDate(d+i+1)
          })
        }

        return list
      }

}
export default EveryDayDone