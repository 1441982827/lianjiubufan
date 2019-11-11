import React from 'react'
import { DatePickerView } from 'antd-mobile'
import {PickItem,FlexBox} from './styledStep'
import {Button } from 'ui/button/'
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US'
import queryString from 'query-string'
import { getTime } from 'utils/time/index'
import {PopupBox} from 'ui/popupbox/'
import axios from 'axios'

let During = {
      startTime:{
            h:0,
            m:0
      },
      endTime:{
            h:0,
            m:0
      }
}

let dateSeletor = {
      "周一":21,
      "周二":22,
      "周三":23,
      "周四":24,
      "周五":25,
      "周六":26,
      "周日":27
}

class ChooseTime extends React.Component{

      state = {
            value:null,
            value2:null,
            isShowSucc:false
      }

      render(){
          return (
                <PickItem>
                        <DatePickerView
                        locale={enUs}
                        mode='time'
                        value={this.state.value}
                        onChange={this.onStartChange.bind(this)}
                        />
                        <DatePickerView
                        locale={enUs}
                        value={this.state.value2}
                        mode='time'
                        onChange={this.onEndChange.bind(this)}
                        />

                        <div className="btns">
                              <Button bg="black" height={40} width={100} bindClick={()=>this.handleClickBack()}>取消</Button>
                              <Button bg="blue" height={40} width={100} bindClick={()=>this.getTime()}>完成</Button>
                        </div>
                        <PopupBox
                        isShow={this.state.isShowSucc}
                        height="200"
                        msg="添加计划成功"
                        >
                              <FlexBox>
                                    <Button width="100" height="40" bindClick={()=>{this.handleClickClose("/plan")}} >回到首页</Button>
                                    <Button width="100" height="40" bindClick={()=>{this.handleClickClose("/plan/detail")}} >查看计划</Button>
                              </FlexBox>
                        </PopupBox>
                </PickItem>
          )
      }
      onStartChange(date){
            During.startTime = {
                  h:date.getHours()===0 ? During.startTime.h :date.getHours(),
                  m:date.getMinutes() === 0 ?  During.startTime.m:date.getMinutes()
            }
            
      }
      onEndChange(date){
            During.endTime = {
                  h:date.getHours()===0 ? During.endTime.h :date.getHours(),
                  m:date.getMinutes() === 0 ?  During.endTime.m:date.getMinutes()
            }
      }

      handleClickClose(path){
            this.setState({
                  isShowSucc:false
            })
            setTimeout(()=>{
                  let {history} = this.props
                  history.push(path)
            },0)
      }

      handleClickBack(){
            let {history} = this.props
            // history.back()
      }

      getTime(){
           if((During.startTime.h < During.endTime.h) || (During.startTime.h === During.endTime.h && During.startTime.m < During.endTime.m)){

                  let queryData = queryString.parse(this.props.location.search)
                  
                  queryData.pstimeone = getTime({
                        'd':dateSeletor[queryData.planweek],
                        'h':During.startTime.h,
                        'mm':During.startTime.m
                  }).toString("y-M-d h:m:s" , true)
                  queryData.pstimetwo = getTime({
                        'd':dateSeletor[queryData.planweek],
                        'h':During.endTime.h,
                        'mm':During.endTime.m
                  }).toString("y-M-d h:m:s",true)
                  queryData.pluserid = 3
                  queryData.psfrequency = "0%"
                  queryData.plpartid = 3
                 
                  this.addPlan(queryData)
                  console.log(queryData)
                  
           }else{
                 
           }
      }

      async addPlan(data){
            

            let result = await axios({
                  url: '/api/plan/add',
                  method: 'post',
                  data,
                  transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                  }],
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
            })

            

            if(result.data.ret){
                  this.setState({
                        isShowSucc:true
                  })
            }

      }
}

export default ChooseTime