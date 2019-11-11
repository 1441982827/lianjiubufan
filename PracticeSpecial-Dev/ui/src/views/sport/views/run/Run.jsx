import React, { Component } from 'react'
import Style from './Styled'
import {Header} from 'ui/header'
import {Icon} from 'ui/icon'
import { ContainerX } from 'layout/container';



class Run extends Component {

    state={
        title:'徒步'
    }
    componentDidMount(){ 

        if(this.props.location.pathname) {
         let path=this.props.location.pathname+''
         let title='徒步'
       
        if (path.indexOf('foot')>0)title='徒步'  
        if (path.indexOf('cycling')>0)title='骑行'  
        if (path.indexOf('run')>0)title='跑步'  
        this.setState(
          {title:title}
        )
       

        }
    }

    render() {
        return (
            <ContainerX
             obg='true'
             bg="#fff"
             padding="0rem .08rem"
             oheight='100%'
             height='6.38rem'
             scrolly='true'
             header={
             <Header
                onLeftClick={
                 (e)=>console.log(this.props.history.goBack())
               }
               leftContent={this.state.title}
               icon={
               <Icon type='left' width='.11rem'></Icon>}
               >
               
               </Header>
             }
            >

          
            <Style>
              
               <img src='https://xuxuxu.club/static/images/wx.jpg' width='300' />

               <p>
                  长按识别二维码
               </p>
               <p>
                    <small> 在小程序中开始运动哦！</small>
               </p>
            </Style>
            
            </ContainerX>
       
        )
    }
}
export default  Run






 