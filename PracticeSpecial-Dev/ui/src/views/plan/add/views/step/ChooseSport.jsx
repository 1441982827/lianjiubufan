import React from 'react'
import { List, Radio} from 'antd-mobile'
import {ListItem,MyList,FlexBox,StaticBox} from './styledStep'
import {Button} from 'ui/button/'
import {PopupBox} from 'ui/popupbox/'
import http from 'utils/http/index'

const RadioItem = Radio.RadioItem


class ChooseSport extends React.Component{
      state={
            sportList:[{
                  title:"背部",
                  id:12301,
                  items:[{label:'泡沫轴背部放松',value:0}]
            },
            {
                  title:"肩部",
                  id:12302,
                  items:[{label:"",value:0}]
            },
            {
                  title:"颈部",
                  id:12303,
                  items:[{label:"",value:0}],
                  selectItem:""
            },
            {
                  title:"腹部",
                  id:12304,
                  items:[{label:"",value:0}],
                  selectItem:""
            },
            {
                  title:"腿部",
                  id:12305,
                  items:[{label:"",value:0}],
                  selectItem:""
            },
            {
                  title:"全身",
                  id:12306,
                  items:[{label:"",value:0}],
                  selectItem:""
            }],
            isShowItemList:false,
            popList:[],
            value:0,
            selectItem:"泡沫轴背部放松",
            nowItemIndex:0
      }
      render(){
          return <>
            <MyList>
                  {
                        this.state.sportList.map((value,index)=>{
                              return <ListItem onClick={()=>this.handleClickItem(value.title,index)} key={value.id}>
                                          <h5>{value.title}</h5>
                                          <p>{this.state.nowItemIndex === index ?this.state.selectItem:""}</p>
                                    </ListItem>
            
                        })
                  }
            </MyList>
            <FlexBox>
                  <Button 
                  width={200} 
                  height={40} 
                  bindClick={()=>this.handleClickGoNext()}
                  >下一步</Button>
            </FlexBox>


            <PopupBox
            isShow={this.state.isShowItemList}
            height="255"
            >
                  <StaticBox height="1.3rem">
                        <List>
                              {this.state.popList.map(i => (
                              <RadioItem key={i.value} checked={this.state.value === i.value} onChange={() => this.onChange(i.value,i.label)}>
                                    {i.label}
                              </RadioItem>
                              ))}
                        </List>
                  </StaticBox>
                  <Button width="100" height="40" bindClick={()=>{this.handleClickClose()}} >完成</Button>
                  <Button height="30" customStyle="border:0;background:none;color:black;font-size:.14rem;"  bindClick={()=>{this.handleClickClose()}}>取消</Button>
            </PopupBox>
          </>
      }
      async handleClickItem(title,index){

            let list = await http.get({url:"/api/sport/list?spsname="+title})
            let newlsit = list.data.map((value,index)=>{
                  return {
                        label:value.sptname,
                        value:index
                  }
            })
            this.setState({
                  popList:newlsit,
                  selectItem:newlsit[0].label
            })
            
            setTimeout(() => {
                  this.setState({
                        isShowItemList:true,
                        nowItemIndex:index,
                        value:0
                  })
            }, 0);

      }


      handleClickGoNext(){
            let {history} = this.props
            history.push('/plan/add/setting/sportstep02?planname='+this.state.selectItem)
      }

      handleClickClose(){
            this.setState({
                  isShowItemList:false
            })
      }

      onChange(index,value){
            this.setState({
                  value:index,
                  selectItem:value
            })
      }
}

export default ChooseSport